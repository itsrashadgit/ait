
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Mail, Phone } from "lucide-react";

interface LeadGenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

export const LeadGenerationModal = ({ isOpen, onClose, selectedPlan }: LeadGenerationModalProps) => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [progress, setProgress] = useState(0);

  const handleContinue = () => {
    if (step === 1) {
      setProgress(33);
      setStep(2);
    } else if (step === 2) {
      setProgress(66);
      setStep(3);
    } else if (step === 3) {
      setProgress(100);
      setStep(4);
    }
  };

  const handleClose = () => {
    setStep(1);
    setProgress(0);
    setEmail("");
    setPhone("");
    setVerificationCode("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {step === 4 ? "Thank You!" : `Get Started with ${selectedPlan}`}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <Progress value={progress} className="w-full" />

          {step === 1 && (
            <div className="text-center space-y-4">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
              <p className="text-gray-600">Preparing to find available workers for your project...</p>
              <p className="text-sm text-gray-500">Setting up your delivery timeline</p>
              <Button onClick={handleContinue} className="w-full">
                Continue
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autocomplete="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  autocomplete="tel"
                />
              </div>
              <Button onClick={handleContinue} className="w-full" disabled={!email || !phone}>
                Next
              </Button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <Mail className="h-8 w-8 text-blue-600 mx-auto" />
                <h3 className="font-semibold">Check Your Email</h3>
                <p className="text-sm text-gray-600">
                  We've sent a verification code to {email}
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter verification code"
                />
              </div>
              <Button onClick={handleContinue} className="w-full" disabled={!verificationCode}>
                Verify
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h3 className="text-xl font-bold text-green-600">Thank You!</h3>
              <p className="text-gray-600">
                Your request has been submitted successfully. Our team will contact you within 24 hours to discuss your {selectedPlan} plan.
              </p>
              <p className="text-sm text-gray-500">
                You'll receive a confirmation email shortly with next steps.
              </p>
              <Button onClick={handleClose} className="w-full">
                Close
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
