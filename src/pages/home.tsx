import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Shield,
  Users,
  Award,
  ChevronDown,
  Calculator,
  Send,
  ExternalLink,
  Wrench,
  DoorOpen,
  DoorClosed,
  Lightbulb,
  Check,
  Facebook,
  Instagram,
  MessageCircle,
  Linkedin,
} from "lucide-react";

export default function Home() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    description: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Sucesso!",
        description:
          "Sua solicitação foi enviada. Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        description: "",
      });
    },
    onError: () => {
      toast({
        title: "Erro",
        description: "Erro ao enviar mensagem. Tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.serviceType
    ) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                <Wrench className="inline-block mr-2 h-8 w-8 text-aluminum" />
                Valdeci Alumínio
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("projetos")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 text-glass-blue mr-2" />
                <span>(98) 98438-6469</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-glass-blue">Portões Automatizados</span>
              <br />
              <span className="text-2xl md:text-4xl lg:text-5xl font-medium">
                & Soluções em Alumínio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Especialistas em automação residencial e comercial. Portões,
              portas de alumínio e instalações de vidro com tecnologia de ponta
              e garantia total.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-glass-blue hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Solicitar Orçamento Grátis
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-slate-400 hover:bg-white hover:text-slate-800 px-8 py-4 rounded-full text-lg font-semibold transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronDown className="text-white h-8 w-8" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-primary">Nossos</span> Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em metalurgia com foco em automação, qualidade
              e design moderno para residências e empresas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Automated Gates */}
            <Card className="group bg-gradient-to-br from-slate-50 to-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                    <DoorOpen className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    Portões Automatizados
                  </h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                  alt="Portão automatizado residencial"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform"
                />
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Controle remoto e app mobile
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Sensor de segurança
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Bateria de emergência
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Garantia de 2 anos
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Aluminum Doors */}
            <Card className="group bg-gradient-to-br from-slate-50 to-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-aluminum rounded-full mb-4">
                    <DoorClosed className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    Portas de Alumínio
                  </h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                  alt="Porta de alumínio moderna"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform"
                />
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Perfis de alta qualidade
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Vedação térmica e acústica
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Múltiplas cores disponíveis
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Resistente à corrosão
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Glass Solutions */}
            <Card className="group bg-gradient-to-br from-slate-50 to-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-glass-blue rounded-full mb-4">
                    <Lightbulb className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    Soluções em Vidro
                  </h3>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                  alt="Instalação profissional de vidros"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform"
                />
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Vidro temperado e laminado
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Envidraçamento de sacadas
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Box para banheiro
                  </li>
                  <li className="flex items-center">
                    <Check className="text-glass-blue mr-3 h-5 w-5" />
                    Manutenção e reparo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Technology & Quality Banner */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Tecnologia e Qualidade Garantida
              </h3>
              <p className="text-xl mb-8">
                Utilizamos equipamentos de última geração e materiais
                certificados para entregar projetos que superam expectativas.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div>Projetos Realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">25+</div>
                  <div>Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div>Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="projetos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-glass-blue">Galeria</span> de Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Confira alguns dos nossos trabalhos mais recentes e veja a
              qualidade que entregamos em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Project Cards */}
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                title: "Portão Residencial Automatizado",
                description:
                  "Sistema completo com controle remoto e sensor de segurança",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                title: "Fachada Comercial",
                description:
                  "Portas de alumínio com vidro temperado para estabelecimento comercial",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                title: "Envidraçamento de Sacada",
                description:
                  "Vidro temperado com perfis de alumínio para maior segurança",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                title: "Estrutura Personalizada",
                description:
                  "Projeto sob medida com acabamento de alta qualidade",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                title: "Portão Industrial",
                description:
                  "Sistema automatizado para uso comercial intensivo",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
                title: "Box de Vidro Premium",
                description:
                  "Instalação residencial com vidro temperado e ferragens especiais",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className="text-sm opacity-90">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold">
              <ExternalLink className="mr-2 h-5 w-5" />
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                <span className="text-aluminum">Sobre a</span> Valdeci Alumínio
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Com mais de 25 anos de experiência no mercado, a Valdeci
                Alumínio se consolidou como referência em soluções automatizadas
                e trabalhos em alumínio e vidro na região.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Award className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Qualidade Certificada
                    </h4>
                    <p className="text-gray-600">
                      Todos os nossos produtos passam por rigoroso controle de
                      qualidade e contam com certificação ISO.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-glass-blue rounded-full flex items-center justify-center mr-4">
                    <Users className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Equipe Especializada
                    </h4>
                    <p className="text-gray-600">
                      Profissionais capacitados e em constante atualização com
                      as mais modernas técnicas do mercado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-aluminum rounded-full flex items-center justify-center mr-4">
                    <Wrench className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      Tecnologia Avançada
                    </h4>
                    <p className="text-gray-600">
                      Equipamentos de última geração para garantir precisão e
                      acabamento perfeito em todos os projetos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold">
                  <Shield className="mr-2 h-5 w-5" />
                  Nossos Valores
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-aluminum text-aluminum hover:bg-aluminum hover:text-white px-6 py-3 rounded-full font-semibold"
                >
                  <Award className="mr-2 h-5 w-5" />
                  Certificações
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
                alt="Metalúrgico especializado trabalhando com peças de alumínio"
                className="w-full rounded-2xl shadow-xl"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-gray-600 text-sm">
                    PROJETOS CONCLUÍDOS
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-glass-blue mb-2">
                    100%
                  </div>
                  <div className="text-gray-600 text-sm">
                    SATISFAÇÃO GARANTIDA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-primary">O que Dizem</span> Nossos Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista. Veja
              alguns depoimentos de quem confia na Valdeci Alumínio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Rosa",
                initials: "MR",
                review:
                  "Excelente trabalho! O portão automatizado ficou perfeito e o atendimento foi impecável do início ao fim. Super recomendo!",
                service: "Portão Residencial Automatizado",
                bg: "bg-primary",
              },
              {
                name: "João Silva",
                initials: "JS",
                review:
                  "Profissionais muito competentes. A instalação das portas de alumínio ficou linda e dentro do prazo combinado.",
                service: "Portas Comerciais de Alumínio",
                bg: "bg-glass-blue",
              },
              {
                name: "Ana Costa",
                initials: "AC",
                review:
                  "O envidraçamento da sacada superou minhas expectativas. Qualidade top e preço justo. Muito satisfeita!",
                service: "Envidraçamento de Sacada",
                bg: "bg-aluminum",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 ${testimonial.bg} rounded-full flex items-center justify-center mr-4`}
                    >
                      <span className="text-white font-bold">
                        {testimonial.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "{testimonial.review}"
                  </p>
                  <div className="text-sm text-gray-500">
                    {testimonial.service}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              <span className="text-glass-blue">Entre em</span> Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para começar seu projeto? Entre em contato conosco e
              solicite seu orçamento gratuito.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="bg-slate-50 rounded-2xl p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Solicite seu Orçamento
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Nome Completo *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Seu nome"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Telefone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(11) 99999-9999"
                        className="rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu@email.com"
                      className="rounded-xl"
                      required
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="serviceType"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Tipo de Serviço *
                    </Label>
                    <Select
                      value={formData.serviceType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, serviceType: value })
                      }
                    >
                      <SelectTrigger className="rounded-xl">
                        <SelectValue placeholder="Selecione o serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="portao-automatizado">
                          Portão Automatizado
                        </SelectItem>
                        <SelectItem value="portas-aluminio">
                          Portas de Alumínio
                        </SelectItem>
                        <SelectItem value="solucoes-vidro">
                          Soluções em Vidro
                        </SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="description"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Descrição do Projeto
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Descreva seu projeto..."
                      className="rounded-xl resize-none"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-primary hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold"
                  >
                    {contactMutation.isPending ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Solicitação
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Endereço
                      </h4>
                      <p className="text-gray-600">
                        Rua Nossa Senhora da Vitória, nº 12
                        <br />
                        Bairro Miritiua-Turu - São José de Ribamar, MA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-glass-blue rounded-full flex items-center justify-center mr-4">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        Telefones
                      </h4>
                      <p className="text-gray-600">
                        (98) 98463-3834
                        <br />
                        (98) 99611-7115
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-aluminum rounded-full flex items-center justify-center mr-4">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        E-mail
                      </h4>
                      <p className="text-gray-600">
                        contato@Valdeci Alumínio.com.br
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                      <MessageCircle className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">
                        WhatsApp
                      </h4>
                      <p className="text-gray-600">(98) 98463-3834</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-slate-50 rounded-2xl p-6">
                <CardContent className="p-0">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">
                    Horário de Funcionamento
                  </h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span>8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span>8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="text-red-600">Fechado</span>
                    </div>
                  </div>

                  {/* <div className="mt-6 pt-6 border-t border-gray-200">
                    <h5 className="font-semibold text-slate-800 mb-3">
                      Atendimento 24h para Emergências
                    </h5>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold">
                      <Clock className="mr-2 h-5 w-5" />
                      Emergência: (11) 99999-7777
                    </Button>
                  </div> */}
                </CardContent>
              </Card>

              {/* <div className="flex space-x-4">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl text-center">
                  <Facebook className="mb-2 h-6 w-6 mx-auto" />
                  <span className="text-sm block">Facebook</span>
                </Button>
                <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-xl text-center">
                  <Instagram className="mb-2 h-6 w-6 mx-auto" />
                  <span className="text-sm block">Instagram</span>
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl text-center">
                  <MessageCircle className="mb-2 h-6 w-6 mx-auto" />
                  <span className="text-sm block">WhatsApp</span>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                <Wrench className="inline-block mr-2 h-8 w-8 text-glass-blue" />
                Valdeci Alumínio
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Especialistas em automação residencial e comercial. Qualidade e
                tecnologia em cada projeto há mais de 25 anos.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="icon"
                  className="bg-primary rounded-full hover:bg-blue-600"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary rounded-full hover:bg-blue-600"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary rounded-full hover:bg-blue-600"
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-primary rounded-full hover:bg-blue-600"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button className="hover:text-glass-blue transition-colors">
                    Portões Automatizados
                  </button>
                </li>
                <li>
                  <button className="hover:text-glass-blue transition-colors">
                    Portas de Alumínio
                  </button>
                </li>
                <li>
                  <button className="hover:text-glass-blue transition-colors">
                    Soluções em Vidro
                  </button>
                </li>
                <li>
                  <button className="hover:text-glass-blue transition-colors">
                    Manutenção
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato Rápido</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-glass-blue" />
                  <span>(98) 98463-3834</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-glass-blue" />
                  <span>contato@valdeci.com.br</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-glass-blue mt-1" />
                  <span>
                    Rua Nossa Senhora da Vitória, nº 12
                    <br />
                    Bairro Miritiua-Turu - São José de Ribamar, MA
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Valdeci Alumínio. Todos os direitos
              reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <button className="hover:text-glass-blue transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-glass-blue transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg transition-all transform hover:scale-110"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
}
