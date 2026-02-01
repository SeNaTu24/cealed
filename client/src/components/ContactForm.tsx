import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@/lib/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
    const mutation = useCreateInquiry();

    const form = useForm<InsertInquiry>({
        resolver: zodResolver(insertInquirySchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data: InsertInquiry) => {
        mutation.mutate(data, {
            onSuccess: () => {
                form.reset();
            },
        });
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 sm:space-y-5 md:space-y-6 bg-white/5 border border-white/10 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg"
            >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-display">
                    Get in Touch
                </h3>

                <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base">
                                    Full Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="John Doe"
                                        {...field}
                                        className="h-10 sm:h-11 text-sm sm:text-base"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base">
                                    Email Address
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="john@company.com"
                                        {...field}
                                        className="h-10 sm:h-11 text-sm sm:text-base"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base">
                                    Company (Optional)
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Company Ltd."
                                        {...field}
                                        value={field.value || ""}
                                        className="h-10 sm:h-11 text-sm sm:text-base"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm sm:text-base">
                                    Subject
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Compliance Inquiry"
                                        {...field}
                                        className="h-10 sm:h-11 text-sm sm:text-base"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm sm:text-base">
                                Message
                            </FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="How can we help you?"
                                    className="min-h-[100px] sm:min-h-[120px] md:min-h-[140px] resize-y text-sm sm:text-base"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full h-11 sm:h-12 md:h-14 text-sm sm:text-base font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 button-hover"
                >
                    {mutation.isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}
