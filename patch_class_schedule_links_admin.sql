-- patch_class_schedule_links_admin.sql
-- Admin bypass policy for class_schedule_links
-- Required for admin impersonation mode to work correctly

CREATE POLICY "class_schedule_links_admin_all"
  ON public.class_schedule_links
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  )
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );
