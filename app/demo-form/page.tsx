import DemoForm from '@/app/ui/demo-form';

export default function DemoFormPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Bank Account Details Form
            </h1>
            <DemoForm />
          </div>
        </div>
      </div>
    </main>
  );
}