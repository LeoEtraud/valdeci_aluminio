import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <BadgeCheck className="h-8 w-8 text-green-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              E-mail enviado com Sucesso!
            </h1>
          </div>

          <div className="mt-6 flex justify-center">
            <a
              href="/"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition-colors"
            >
              Voltar à Página Inicial
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
