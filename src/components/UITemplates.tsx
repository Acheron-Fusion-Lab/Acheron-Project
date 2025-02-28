import { component$, Slot, useSignal, useStore } from '@builder.io/qwik';
import { UIOrganism } from './UIOrganism';
import { UIAtom } from './UIAtom';
import { UIFeature } from './UIFeatures';
import { UIMolecule } from './UIMolecules';

interface UITemplateProps {
  type: 
  | 'auth' 
  | 'detail' 
  | 'listing' 
  | 'page' 
  | 'playground';
  title?: string;
  items?: any[];
  renderItem?: (item: any) => any;
  store?: {
    selectedModel?: string;
    modelType?: string;
    responseSpeed?: string;
    temperature?: number;
    contextLength?: number;
    outputFormat?: string;
    response?: string;
  };
  models?: string[];
}

export const UITemplate = component$<UITemplateProps>(({
  type,
  title = '',
  items = [],
  renderItem,
  store = {
    selectedModel: '',
    modelType: 'GPT-4',
    responseSpeed: 'fast',
    temperature: 0.7,
    contextLength: 256,
    outputFormat: 'text',
    response: '',
  },
  models = [],
}) => {
  const state = useStore(store);
  const sidebarVisible = useSignal(true);

  return (
    <div class="min-h-screen flex flex-col">
      <header class="w-full">
        <UIOrganism type="header" />
      </header>

      <main class="flex-grow">
        {type === 'auth' && (
          <div class="flex flex-col justify-center items-center p-6">
            <div class="w-full max-w-md">
              <h1 class="text-2xl font-bold text-center mb-6">{title}</h1>
              <Slot />
            </div>
          </div>
        )}

        {type === 'page' && (
          <div class="w-full bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {title && (
                <div class="py-4">
                  <h1 class="text-2xl font-bold text-gray-900">{title}</h1>
                </div>
              )}
              <div class="py-4">
                <Slot />
              </div>
            </div>
          </div>
        )}

        {type === 'playground' && (
          <div class="h-full">
            <div class="flex h-screen">
              <button
                class="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full z-20 hover:bg-gray-700 transition"
                onClick$={() => sidebarVisible.value = !sidebarVisible.value}
              >
                {sidebarVisible.value ? 'Hide' : 'Show'}
              </button>

              <div class={`${sidebarVisible.value ? 'block' : 'hidden'} md:block w-full md:w-72 bg-gray-100 p-6 border-r shadow-lg overflow-auto`}>
                <Slot name="sidebar" />
                {models.length > 0 && (
                  <div class="mt-6 space-y-3 text-sm">
                    <h2 class="font-semibold">Models</h2>
                    <ul class="space-y-2">
                      {models.map((model) => (
                        <li
                          key={model}
                          class={`p-2 rounded-md cursor-pointer transition hover:bg-gray-200 ${state.selectedModel === model ? 'bg-blue-100' : ''}`}
                          onClick$={() => state.selectedModel = model}
                        >
                          {model}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div class="mt-6 space-y-4 text-sm">
                  <div>
                    <label class="block font-semibold mb-1">Type</label>
                    <select
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      value={state.modelType}
                      onChange$={(e) => state.modelType = (e.target as HTMLSelectElement).value}
                    >
                      {['GPT-4', 'DALL-E', 'Custom-Model'].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label class="block font-semibold mb-1">Speed</label>
                    <select
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      value={state.responseSpeed}
                      onChange$={(e) => state.responseSpeed = (e.target as HTMLSelectElement).value}
                    >
                      {['fast', 'medium', 'slow'].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label class="block font-semibold mb-1">Temperature</label>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={state.temperature}
                      class="w-full"
                      onInput$={(e) => state.temperature = Number((e.target as HTMLInputElement).value)}
                    />
                    <span class="block text-right text-xs text-gray-600">{state.temperature}</span>
                  </div>
                  <div>
                    <label class="block font-semibold mb-1">Context</label>
                    <input
                      type="number"
                      min="256"
                      max="4096"
                      value={state.contextLength}
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      onInput$={(e) => state.contextLength = Number((e.target as HTMLInputElement).value)}
                    />
                  </div>
                  <div>
                    <label class="block font-semibold mb-1">Format</label>
                    <select
                      class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      value={state.outputFormat}
                      onChange$={(e) => state.outputFormat = (e.target as HTMLSelectElement).value}
                    >
                      {['text', 'json', 'html'].map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div class="flex-1 overflow-auto p-6 bg-gray-50">
                <Slot />
                {state.response && (
                  <div class="mt-6 bg-white p-4 rounded-lg border shadow">
                    <h2 class="text-lg font-semibold mb-2">Response</h2>
                    <div class="text-gray-700 whitespace-pre-wrap text-sm">{state.response}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {(type === 'detail' || type === 'listing') && (
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Slot />
          </div>
        )}
      </main>

      <footer class="w-full mt-auto">
        <UIOrganism type="footer" />
      </footer>
    </div>
  );
});
