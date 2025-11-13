export const emailConfig = {
  serviceId: import.meta.env.EMAILJS_SERVICE_ID,
  templateId: import.meta.env.EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
} as const;

export function assertEmailConfig(): boolean {
  const { serviceId, templateId, publicKey } = emailConfig;
  const ok = Boolean(serviceId && templateId && publicKey);
  if (!ok) {
    console.error('[emailConfig] Missing one or more EmailJS env vars');
  }
  return ok;
}
