import DemoForm from '@/app/ui/demo-form';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Demo Form</h1>
          <p className="text-gray-600">Generated from Figma design using Material UI and Tailwind CSS</p>
        </div>
        <div className="flex justify-center">
          <DemoForm />
        </div>
      </div>
    </main>
  );
}