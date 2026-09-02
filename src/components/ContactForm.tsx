import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Play } from 'lucide-react';
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
        title: "Campaign Request Submitted",
        description: "A DGenz enterprise revenue architect will review your ICP criteria and contact you within 24 hours."
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
    }, 600);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getFormTitle = () => {
    switch (type) {
      case 'get-started':
        return 'Launch campaign with DGenz Media';
      case 'demo':
        return 'Schedule enterprise intent consultation';
      default:
        return 'Contact revenue architecture team';
    }
  };

  const getFormDescription = () => {
    switch (type) {
      case 'get-started':
        return 'Specify your pipeline targets to receive account match rate estimates and syndication allocations.';
      case 'demo':
        return 'Review live buyer intent signals across your target accounts with an enterprise strategist.';
      default:
        return 'Submit your inquiry for technical data documentation and custom ABM scoping.';
    }
  };

  const defaultTrigger = (
    <button 
      type="button" 
      className={`${type === 'get-started' ? 'carbon-btn-primary' : 'carbon-btn-tertiary'} ${className || ''}`}
    >
      {type === 'get-started' ? (
        <>
          <span>Get started</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </>
      ) : (
        <>
          <span>Schedule consultation</span>
          <Play className="w-3.5 h-3.5 ml-2" />
        </>
      )}
    </button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      
      <DialogContent className="w-[calc(100vw-2rem)] sm:w-full sm:max-w-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 bg-white border border-[#e0e0e0] rounded-none z-50">
        
        {/* Form Header */}
        <DialogHeader className="space-y-1.5 pb-4 border-b border-[#e0e0e0] text-left">
          <span className="carbon-eyebrow text-[#0f62fe]">
            Enterprise strategy intake
          </span>
          <DialogTitle className="text-xl sm:text-2xl font-light text-[#161616] tracking-tight">
            {getFormTitle()}
          </DialogTitle>
          <p className="text-xs text-[#525252] leading-relaxed">
            {getFormDescription()}
          </p>
        </DialogHeader>
        
        {/* Main Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <Label htmlFor="firstName" className="text-xs text-[#525252] font-normal">
                First Name *
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                className="carbon-input-field h-11"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-1 text-left">
              <Label htmlFor="lastName" className="text-xs text-[#525252] font-normal">
                Last Name *
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                required
                className="carbon-input-field h-11"
                placeholder="Doe"
              />
            </div>
          </div>
          
          {/* Business Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <Label htmlFor="email" className="text-xs text-[#525252] font-normal">
                Business Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="carbon-input-field h-11"
                placeholder="jane@enterprise.com"
              />
            </div>

            <div className="space-y-1 text-left">
              <Label htmlFor="phone" className="text-xs text-[#525252] font-normal">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="carbon-input-field h-11"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
          
          {/* Company Name & Job Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <Label htmlFor="company" className="text-xs text-[#525252] font-normal">
                Company Name *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
                className="carbon-input-field h-11"
                placeholder="Enterprise Inc."
              />
            </div>

            <div className="space-y-1 text-left">
              <Label htmlFor="jobTitle" className="text-xs text-[#525252] font-normal">
                Job Title *
              </Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                required
                className="carbon-input-field h-11"
                placeholder="VP of Growth / Demand Gen"
              />
            </div>
          </div>
          
          {/* Company Size & Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-left">
              <Label htmlFor="companySize" className="text-xs text-[#525252] font-normal">
                Company Size
              </Label>
              <Select onValueChange={(value) => handleInputChange('companySize', value)}>
                <SelectTrigger className="h-11 bg-[#f4f4f4] border-0 border-b border-[#8d8d8d] rounded-none text-xs text-[#161616] focus:border-b-2 focus:border-b-[#0f62fe] focus:ring-0">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-[#e0e0e0] shadow-sm rounded-none">
                  <SelectItem value="1-50">1-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201-1000">201-1000 employees</SelectItem>
                  <SelectItem value="1000+">1000+ Enterprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-1 text-left">
              <Label htmlFor="industry" className="text-xs text-[#525252] font-normal">
                Primary Industry
              </Label>
              <Select onValueChange={(value) => handleInputChange('industry', value)}>
                <SelectTrigger className="h-11 bg-[#f4f4f4] border-0 border-b border-[#8d8d8d] rounded-none text-xs text-[#161616] focus:border-b-2 focus:border-b-[#0f62fe] focus:ring-0">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-[#e0e0e0] shadow-sm rounded-none">
                  <SelectItem value="technology">Software & SaaS</SelectItem>
                  <SelectItem value="financial-services">Financial Services</SelectItem>
                  <SelectItem value="healthcare">Healthcare & Pharma</SelectItem>
                  <SelectItem value="manufacturing">Industrial & Manufacturing</SelectItem>
                  <SelectItem value="professional-services">IT & Cloud Services</SelectItem>
                  <SelectItem value="other">Other B2B Sector</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Message / Objectives */}
          <div className="space-y-1 text-left">
            <Label htmlFor="message" className="text-xs text-[#525252] font-normal">
              Pipeline Targets & Specific Requirements (Optional)
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Detail target account geographies, buyer committee seniority, or required volume..."
              rows={3}
              className="carbon-input-field resize-none"
            />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-3">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-full sm:w-1/3 carbon-btn-secondary justify-center text-xs"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-2/3 carbon-btn-primary justify-center text-xs disabled:opacity-50"
            >
              <span>
                {isSubmitting ? 'Submitting...' : type === 'demo' ? 'Schedule Consultation' : 'Submit Campaign Brief'}
              </span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </button>
          </div>

          <div className="pt-2 text-center">
            <p className="text-[11px] text-[#8c8c8c]">
              Enterprise Data Governance: We uphold strict GDPR, CCPA, and SOC2 compliance standards.
            </p>
          </div>

        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;