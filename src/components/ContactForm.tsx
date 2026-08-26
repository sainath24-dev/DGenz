import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  type: 'get-started' | 'demo' | 'general';
  trigger?: React.ReactNode;
  className?: string;
}

export const ContactForm = ({ type, trigger, className }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    companySize: '',
    industry: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Inquiry Received Successfully",
        description: "A DGenz revenue architect will contact you within 24 hours to review your requirements."
      });
      setIsSubmitting(false);
      setIsOpen(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        companySize: '',
        industry: '',
        message: ''
      });
    }, 800);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getFormTitle = () => {
    switch (type) {
      case 'get-started':
        return 'Get Started with DGenz Media';
      case 'demo':
        return 'Schedule Strategy Consultation';
      default:
        return 'Contact Our Revenue Team';
    }
  };

  const getFormDescription = () => {
    switch (type) {
      case 'get-started':
        return 'Connect with our team to launch account-based campaigns tailored to your target pipeline goals.';
      case 'demo':
        return 'Explore how DGenz Media accelerates enterprise pipeline with deterministic intent intelligence.';
      default:
        return 'Submit your inquiry to receive custom frameworks, audits, or technical platform documentation.';
    }
  };

  const defaultTrigger = (
    <Button className={`${type === 'get-started' ? 'btn-accent' : 'btn-outline'} group ${className}`}>
      {type === 'get-started' ? (
        <>
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </>
      ) : (
        <>
          <Play className="mr-2 h-4 w-4" />
          Request Demo
        </>
      )}
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      
      <DialogContent className="w-[calc(100vw-2rem)] sm:w-full sm:max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-white border border-slate-200 shadow-2xl rounded-3xl z-50">
        
        {/* Form Header */}
        <DialogHeader className="space-y-2 pb-4 border-b border-slate-100 text-left">
          <div className="inline-flex items-center px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider w-fit">
            <span>Direct Strategy Access</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {getFormTitle()}
          </DialogTitle>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {getFormDescription()}
          </p>
        </DialogHeader>
        
        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <Label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                className="h-11 bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 transition-all"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-1.5 text-left">
              <Label htmlFor="lastName" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                className="h-11 bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 transition-all"
                placeholder="Doe"
              />
            </div>
          </div>
          
          {/* Business Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Business Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="h-11 bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 transition-all"
                placeholder="jane@company.com"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <Label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="h-11 bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          
          {/* Company Name & Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <Label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Company Name *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                className="h-11 bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 transition-all"
                placeholder="Enterprise Corp"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <Label htmlFor="jobTitle" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Job Title *
              </Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                required
                className="h-11 bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 transition-all"
                placeholder="VP of Growth / Demand Gen"
              />
            </div>
          </div>
          
          {/* Company Size & Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 text-left">
              <Label htmlFor="companySize" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Company Size
              </Label>
              <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                <SelectTrigger className="h-11 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-500">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-slate-200 shadow-xl rounded-xl">
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-1000">201-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1.5 text-left">
              <Label htmlFor="industry" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Primary Industry
              </Label>
              <Select onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger className="h-11 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:ring-2 focus:ring-emerald-500">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-slate-200 shadow-xl rounded-xl">
                  <SelectItem value="technology">Software & SaaS</SelectItem>
                  <SelectItem value="financial-services">Financial Services & Fintech</SelectItem>
                  <SelectItem value="healthcare">Healthcare & Life Sciences</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing & Supply Chain</SelectItem>
                  <SelectItem value="retail">Retail & E-commerce</SelectItem>
                  <SelectItem value="professional-services">Enterprise IT Services</SelectItem>
                  <SelectItem value="other">Other B2B Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Message / Goals */}
          <div className="space-y-1.5 text-left">
            <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">
              ABM & Pipeline Objectives (Optional)
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your target accounts, current conversion bottlenecks, or revenue goals..."
              rows={3}
              className="bg-slate-50 border border-slate-200 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:border-emerald-500 text-sm font-medium text-slate-900 resize-none transition-all"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-1/3 h-12 rounded-xl border border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-2/3 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:scale-101 cursor-pointer disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              <span>
                {isSubmitting ? 'Submitting...' : type === 'demo' ? 'Schedule Consultation' : 'Submit Request'}
              </span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          <div className="pt-2 text-center">
            <p className="text-[11px] text-slate-500">
              🔒 100% Privacy Assured. We will never share or sell your business information.
            </p>
          </div>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;