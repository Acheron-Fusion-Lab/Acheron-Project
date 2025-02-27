import { component$, useStore, useResource$, Resource, $ } from '@builder.io/qwik';
import { UITemplate } from '~/components/UITemplates';
import { UIOrganism } from '~/components/UIOrganism';

interface Model {
  id: string;
  name: string;
}

export default component$(() => {
  // State store for customization options
  const store = useStore({
    selectedModel: '',
    userPrompt: '',
    response: '',
    options: {
      temperature: 0.7,
      maxTokens: 100
    }
  });

  // Resource to fetch the list of available models
  const modelsResource = useResource$(async () => {
    const res = await fetch('/api/models');
    if (!res.ok) {
      throw new Error('Failed to fetch model list');
    }
    return res.json();
  });

  const handleModelSelect$ = $((model: Model) => {
    store.selectedModel = model.id;
  });

  const handleSubmit$ = $(async () => {
    try {
      const res = await fetch('/api/playaround', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: store.selectedModel,
          options: store.options,
          prompt: store.userPrompt,
        }),
      });
      const data = await res.json();
      store.response = data.response;
    } catch (error) {
      console.error('Error:', error);
    }
  });

  return (
    <UITemplate type="playground">
      <UIOrganism type="header" />
      <div class="flex flex-col md:flex-row min-h-screen">
        <aside class="md:w-1/4 bg-gray-100 p-4 border-r">
          <h1 class="text-xl font-bold mb-4">Playaround</h1>

          <Resource
            value={modelsResource}
            onPending={() => <p>Loading models...</p>}
            onRejected={(error) => <p>Error: {error.message}</p>}
            onResolved={(models: Array<string>) => (
              <UIOrganism
                type="model-list"
                models={models.map(model => ({ id: model, name: model }))}
                onSelect$={handleModelSelect$}
              />
            )}
          />
        </aside>

        <main class="md:w-3/4 p-4">
          <div class="mb-4">
            <label class="block mb-2 font-semibold">Your Prompt</label>
            <textarea
              class="w-full p-2 border rounded"
              rows={6}
              value={store.userPrompt}
              onInput$={(e) => (store.userPrompt = (e.target as HTMLTextAreaElement).value)}
            />
            <button
              class="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick$={handleSubmit$}
            >
              Send
            </button>
          </div>

          <UIOrganism type="output" response={store.response} />
        </main>
      </div>
      <UIOrganism type="footer" />
    </UITemplate>
  );
});
