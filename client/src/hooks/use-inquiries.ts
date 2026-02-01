import { useMutation } from "@tanstack/react-query";
import { type InsertInquiry } from "@/lib/schema";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Mock API call for frontend-only version
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success
      return { success: true, message: "Inquiry submitted successfully" };
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "We have received your message and will contact you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });
}
