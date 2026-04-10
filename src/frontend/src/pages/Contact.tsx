import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddContact } from "@/hooks/use-backend";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SUBJECTS = [
  "Order Issue",
  "Product Query",
  "Delivery Issue",
  "Feedback",
  "Other",
] as const;

const FAQ_ITEMS = [
  {
    question: "Where do you deliver?",
    answer:
      "We deliver across Delhi NCR, including Delhi, Gurugram, Noida, Faridabad, and Ghaziabad. We are rapidly expanding to more cities. Enter your pincode at checkout to check availability in your area.",
  },
  {
    question: "How fresh are your products?",
    answer:
      "All Yadav Dairy products are sourced fresh daily from our network of trusted dairy farms. Milk is procured, pasteurized, and dispatched within 6 hours of milking. Products are delivered within 24 hours of packaging.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 100% freshness guarantee. If you receive a product that does not meet our quality standards, contact us within 2 hours of delivery and we will arrange a replacement or full refund — no questions asked.",
  },
  {
    question: "Can I change my order?",
    answer:
      "Orders can be modified or cancelled within 30 minutes of placement. After that, orders are processed for dispatch. Please call our support line at +91-9801234567 immediately if you need to make changes.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash on Delivery (COD), UPI, Net Banking, and all major debit/credit cards. All online transactions are secured with 256-bit SSL encryption.",
  },
  {
    question: "Do you offer subscriptions?",
    answer:
      "Yes! Subscribe to daily or weekly delivery plans for milk, curd, paneer, and more. Subscribers enjoy 10% off every order and priority delivery slots. Set up your subscription from your profile page.",
  },
];

type Subject = (typeof SUBJECTS)[number];

interface FormState {
  name: string;
  email: string;
  subject: Subject | "";
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const submitMutation = useAddContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject ||
      !form.message.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (form.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: `[${form.subject}] ${form.message.trim()}`,
    };

    try {
      await submitMutation.mutateAsync(payload);
      toast.success("Message sent! We will reply within 24-48 hours.");
      setForm(INITIAL_FORM);
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleLiveChat = () => {
    toast.info("Live chat coming soon!");
  };

  return (
    <div className="relative">
      {/* Page Header */}
      <section className="bg-card border-b py-10 px-4">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <div className="text-5xl mb-3">🤝</div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            We are here to help. Reach out and our team will get back to you
            promptly.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
        {/* Contact Info Cards */}
        <section className="animate-slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Phone Card */}
            <Card className="card-hover border-border">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    Phone
                  </p>
                  <a
                    href="tel:+919801234567"
                    className="text-sm text-primary hover:underline font-medium"
                    data-ocid="contact-phone-link"
                  >
                    +91-9801234567
                  </a>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> Mon–Sat, 9AM–6PM
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="card-hover border-border">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:support@yadavdairy.com"
                    className="text-sm text-accent hover:underline font-medium break-all"
                    data-ocid="contact-email-link"
                  >
                    support@yadavdairy.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> 24–48 hr response
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location Card */}
            <Card className="card-hover border-border">
              <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-chart-3/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-chart-3" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    Location
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Yadav Dairy, Fresh Milk Street,
                    <br />
                    Delhi, India
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form */}
        <section className="animate-slide-up">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="font-display text-xl flex items-center gap-2">
                  <Send className="w-5 h-5 text-accent" />
                  Send us a Message
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill in the form and we will get back to you within 24–48
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name">Your Name</Label>
                    <Input
                      id="contact-name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      placeholder="Rahul Sharma"
                      required
                      data-ocid="contact-name-input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      placeholder="rahul@example.com"
                      required
                      data-ocid="contact-email-input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Select
                      value={form.subject}
                      onValueChange={(val) =>
                        setForm((f) => ({ ...f, subject: val as Subject }))
                      }
                    >
                      <SelectTrigger
                        id="contact-subject"
                        data-ocid="contact-subject-select"
                      >
                        <SelectValue placeholder="Select a subject..." />
                      </SelectTrigger>
                      <SelectContent>
                        {SUBJECTS.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      placeholder="Describe your issue or query in detail (minimum 10 characters)..."
                      rows={5}
                      required
                      minLength={10}
                      data-ocid="contact-message-input"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {form.message.length} / 10 min
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full btn-accent"
                    data-ocid="contact-submit-btn"
                  >
                    {submitMutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <div>
                <h2 className="font-display font-bold text-xl text-foreground mb-1">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-muted-foreground">
                  Quick answers to common questions about Yadav Dairy.
                </p>
              </div>
              <Accordion
                type="single"
                collapsible
                className="space-y-2"
                data-ocid="contact-faq-accordion"
              >
                {FAQ_ITEMS.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="border border-border rounded-lg px-4 bg-card"
                  >
                    <AccordionTrigger className="font-medium text-sm text-foreground hover:no-underline py-3">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-3 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Quick Contact Banner */}
        <section className="bg-muted/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
          <div>
            <h3 className="font-display font-bold text-lg text-foreground">
              Need immediate help?
            </h3>
            <p className="text-sm text-muted-foreground">
              Call us directly for urgent order or delivery issues.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+919801234567" data-ocid="contact-call-cta">
              <Button
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary/10 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
            <a
              href="mailto:support@yadavdairy.com"
              data-ocid="contact-email-cta"
            >
              <Button className="btn-accent gap-2">
                <Mail className="w-4 h-4" />
                Email Support
              </Button>
            </a>
          </div>
        </section>
      </div>

      {/* Floating Live Chat Button */}
      <button
        type="button"
        onClick={handleLiveChat}
        aria-label="Chat with us"
        title="Chat with us"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg flex items-center justify-center transition-smooth hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
        data-ocid="contact-live-chat-btn"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-card text-foreground text-xs font-medium px-2 py-1 rounded-md border border-border shadow-md opacity-0 group-hover:opacity-100 transition-smooth whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </div>
  );
}
