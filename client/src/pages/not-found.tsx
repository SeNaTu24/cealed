import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#020617] via-slate-900 to-black p-4">
            <Card className="w-full max-w-md mx-4 bg-white/5 border border-white/10 backdrop-blur-md">
                <CardContent className="pt-4 sm:pt-6">
                    <div className="flex gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive flex-shrink-0" />
                        <h1 className="text-lg sm:text-2xl font-bold text-white">
                            404 Page Not Found
                        </h1>
                    </div>

                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-300">
                        Did you forget to add the page to the router?
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
