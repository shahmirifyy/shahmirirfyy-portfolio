import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PROFILE } from "@/constants/portfolio";

type FormValues = { name: string; email: string; message: string };

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // Open user's mail client as a portable fallback (no backend required)
    const body = `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio inquiry from " + data.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact">
      <SectionHeader
        kicker="Contact"
        title="Let's build something great"
        desc="Have a project in mind? I'd love to hear about it."
      />
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-6">
        <div className="space-y-3">
          {[
            { Icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
            {
              Icon: MessageCircle,
              label: "WhatsApp",
              value: PROFILE.whatsapp,
              href: `https://wa.me/${PROFILE.whatsapp.replace(/\D/g, "")}`,
            },
            { Icon: Github, label: "GitHub", value: "@shahmirifyy", href: PROFILE.github },
            { Icon: Linkedin, label: "LinkedIn", value: "Shahmir Ali", href: PROFILE.linkedin },
          ].map(({ Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl glass p-4 hover:bg-white/5 hover:-translate-y-0.5 transition"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{label}</div>
                <div className="font-medium">{value}</div>
              </div>
            </a>
          ))}
        </div>
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-2xl p-6 md:p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground">Name</label>
              <Input
                className="mt-1.5 bg-white/5 border-white/10"
                placeholder="Your name"
                {...register("name", {
                  required: "Name is required",
                  maxLength: { value: 100, message: "Too long" },
                })}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Email</label>
              <Input
                className="mt-1.5 bg-white/5 border-white/10"
                type="email"
                placeholder="you@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                  maxLength: { value: 200, message: "Too long" },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Message</label>
            <Textarea
              rows={6}
              className="mt-1.5 bg-white/5 border-white/10"
              placeholder="Tell me about your project..."
              {...register("message", {
                required: "Message is required",
                maxLength: { value: 2000, message: "Too long" },
              })}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            {sent ? (
              <>
                <CheckCircle2 className="mr-1.5 h-4 w-4" /> Message ready to send
              </>
            ) : (
              <>
                <Send className="mr-1.5 h-4 w-4" /> Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
