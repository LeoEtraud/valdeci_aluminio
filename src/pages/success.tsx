import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <BadgeCheck className="h-8 w-8 text-green-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              E-mail enviado com Sucesso!
            </h1>
          </div>

          <a href="/" className="text-blue-500">
            Voltar
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
