"""Run SQL regression tests in a disposable local PostgreSQL cluster (never production)."""
from pathlib import Path
import subprocess
import tempfile
import sys


def run(args):
    result = subprocess.run(args, text=True, capture_output=True, check=False)
    if result.returncode:
        raise RuntimeError(result.stdout + "\n" + result.stderr)
    return result.stdout


with tempfile.TemporaryDirectory(prefix="pp5-course-save-") as root:
    data = root + "/data"
    run(["initdb", "-D", data, "-A", "trust", "--no-locale", "-E", "UTF8"])
    run(["pg_ctl", "-D", data, "-l", root + "/postgres.log", "-o",
         f"-k {root} -p 55439 -c listen_addresses=", "-w", "start"])
    try:
        output = run(["psql", "-h", root, "-p", "55439", "-d", "postgres", "-X",
                      "-v", "ON_ERROR_STOP=1", "-f",
                      str(Path(__file__).with_name("course-update-atomic.sql"))])
        print(output[-450:])
    finally:
        run(["pg_ctl", "-D", data, "-m", "fast", "-w", "stop"])
