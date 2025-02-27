import { component$, useSignal, $ } from '@builder.io/qwik';
import { UITemplate } from '~/components/UITemplates';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Inlined ContactForm component
const ContactForm = component$((props: { formData: FormData; onSubmit$: (formData: FormData) => void }) => {
  const formData = useSignal<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit$ = $((data: FormData) => {
    if (props.onSubmit$) props.onSubmit$(data);
  });

  const handleInput$ = $((field: keyof FormData, value: string) => {
    formData.value = { ...formData.value, [field]: value };
  });

  return (
    <form onSubmit$={(event: Event) => { event.preventDefault(); handleSubmit$(formData.value); }} class="space-y-4">
      <div>
        <label class="block text-gray-700">Name</label>
        <input
          type="text"
          value={formData.value.name}
          onInput$={(e) => handleInput$('name', (e.target as HTMLInputElement).value)}
          class="mt-1 block w-full border rounded p-2"
        />
      </div>
      <div>
        <label class="block text-gray-700">Email</label>
        <input
          type="email"
          value={formData.value.email}
          onInput$={(e) => handleInput$('email', (e.target as HTMLInputElement).value)}
          class="mt-1 block w-full border rounded p-2"
        />
      </div>
      <div>
        <label class="block text-gray-700">Subject</label>
        <input
          type="text"
          value={formData.value.subject}
          onInput$={(e) => handleInput$('subject', (e.target as HTMLInputElement).value)}
          class="mt-1 block w-full border rounded p-2"
        />
      </div>
      <div>
        <label class="block text-gray-700">Message</label>
        <textarea
          value={formData.value.message}
          onInput$={(e) => handleInput$('message', (e.target as HTMLTextAreaElement).value)}
          class="mt-1 block w-full border rounded p-2"
          rows={4}
        ></textarea>
      </div>
      <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
});

export default component$(() => {
  const formData = useSignal<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = $(() => {
    console.log('Form submitted:', formData.value);
    // Add logic to send form data (e.g., via email or API)
  });

  return (
    <UITemplate type="page">
      <div class="max-w-2xl mx-auto">
        {/* Introduction */}
        <section>
          <h2 class="text-2xl font-bold mb-2">Contact Us</h2>
          <p>We’d love to hear from you! Reach out with questions, feedback, or partnership inquiries.</p>
        </section>

        {/* Contact Form */}
        <section>
          <h3 class="text-xl font-semibold mb-2">Send Us a Message</h3>
          <ContactForm formData={formData.value} onSubmit$={handleSubmit} />
        </section>

        {/* Alternative Contact Methods */}
        <section>
          <h3 class="text-xl font-semibold mb-2">Other Ways to Reach Us</h3>
          <ul class="list-disc list-inside">
            <li>
              Email: <a href="mailto:support@aiwebstore.com" class="text-blue-600 underline">support@aiwebstore.com</a>
            </li>
            <li>Phone: +1 (800) 123-4567</li>
            <li>
              Social Media: 
              <a href="https://twitter.com/aiwebstore" class="text-blue-600 underline ml-1">Twitter</a>, 
              <a href="https://linkedin.com/company/aiwebstore" class="text-blue-600 underline ml-1">LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>
    </UITemplate>
  );
});