// ─── Formula Evaluator (Recursive Descent Parser — no eval) ──────────────────
export function evalFormula(expr, vars = {}) {
  if (!expr?.trim()) return null
  let pos = 0
  const str = expr.replace(/\s+/g, '').toUpperCase()

  const peek  = ()  => str[pos] ?? ''
  const next  = ()  => str[pos++]
  const err   = (m) => { throw new Error(m) }

  // comparison → addSub (op addSub)?
  const parseExpr = () => {
    let left = parseAddSub()
    const twoChar = str.slice(pos, pos + 2)
    const oneChar = str[pos]
    let op = ''
    if (['>=','<=','!=','=='].includes(twoChar)) { op = twoChar; pos += 2 }
    else if (['>','<'].includes(oneChar))        { op = oneChar; pos++ }
    if (!op) return left
    const right = parseAddSub()
    return ({ '>':l=>l>right?1:0,'<':l=>l<right?1:0,'>=':l=>l>=right?1:0,
              '<=':l=>l<=right?1:0,'==':l=>l===right?1:0,'!=':l=>l!==right?1:0 })[op](left)
  }

  const parseAddSub = () => {
    let v = parseMulDiv()
    while (peek() === '+' || peek() === '-') {
      const op = next(); const r = parseMulDiv()
      v = op === '+' ? v + r : v - r
    }
    return v
  }

  const parseMulDiv = () => {
    let v = parseUnary()
    while (peek() === '*' || peek() === '/') {
      const op = next(); const r = parseUnary()
      v = op === '*' ? v * r : (r === 0 ? 0 : v / r)
    }
    return v
  }

  const parseUnary = () => {
    if (peek() === '-') { next(); return -parsePrimary() }
    if (peek() === '+') { next(); return parsePrimary() }
    return parsePrimary()
  }

  const parseArgs = () => {
    const args = []
    if (peek() !== ')') {
      args.push(parseExpr())
      while (peek() === ',') { next(); args.push(parseExpr()) }
    }
    if (next() !== ')') err('Expected )')
    return args
  }

  const parsePrimary = () => {
    // Number
    if (/[0-9.]/.test(peek())) {
      let s = ''; while (/[0-9.]/.test(peek())) s += next()
      return parseFloat(s)
    }
    // Parentheses
    if (peek() === '(') {
      next(); const v = parseExpr()
      if (next() !== ')') err('Expected )')
      return v
    }
    // Identifier
    if (/[A-Z_]/.test(peek())) {
      let name = ''; while (/[A-Z0-9_]/.test(peek())) name += next()
      if (peek() === '(') {
        next()
        const args = parseArgs()
        const n = args.length
        switch (name) {
          case 'MIN':     return n ? Math.min(...args) : 0
          case 'MAX':     return n ? Math.max(...args) : 0
          case 'AVG': case 'AVERAGE': return n ? args.reduce((s,x)=>s+x,0)/n : 0
          case 'SUM':     return args.reduce((s,x)=>s+x, 0)
          case 'ROUND':   return Math.round((args[0]??0) * 10**(args[1]??0)) / 10**(args[1]??0)
          case 'FLOOR':   return Math.floor(args[0]??0)
          case 'CEIL':    return Math.ceil(args[0]??0)
          case 'ABS':     return Math.abs(args[0]??0)
          case 'SQRT':    return Math.sqrt(Math.max(0, args[0]??0))
          case 'POW':     return Math.pow(args[0]??0, args[1]??1)
          case 'IF':      return (args[0] ? (args[1]??0) : (args[2]??0))
          case 'CLAMP':   return Math.min(Math.max(args[0]??0, args[1]??0), args[2]??0)
          default: err(`Unknown function: ${name}`)
        }
      }
      // Variable
      return Number(vars[name] ?? 0)
    }
    err(`Unexpected: "${peek()}"`)
  }

  try {
    const result = parseExpr()
    if (pos < str.length) err(`Unexpected "${str[pos]}"`)
    return isNaN(result) ? null : result
  } catch { return null }
}

// Auto-assign variable names A, B, C, ... to bonus columns in order
export function assignBonusVars(bonusCols) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return bonusCols.map((c, i) => ({ ...c, var: letters[i] ?? `V${i}` }))
}
