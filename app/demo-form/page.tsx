import DemoForm from '@/app/ui/demo-form';
import { dmSans } from '@/app/ui/fonts';

export default function DemoFormPage() {
  return (
    <div className={`${dmSans.className} min-h-screen`}>
      <DemoForm />
    </div>
  );
}