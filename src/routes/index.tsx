// src/routes/index.tsx
import { component$, useStore, useResource$, Resource } from '@builder.io/qwik';
import { UITemplate } from '~/components/UITemplates';
import { UIOrganism } from '~/components/UIOrganism';
import { UIAtom } from '~/components/UIAtom';
import { FEATURED_MODELS, AI_CATEGORIES } from '~/mocks/data';
import { UIFeature } from '~/components/UIFeatures';

const FEATUREDMODEL = [
  { id: '1', rank: 1, modelName: 'Llama 2 70B', performanceChange: '+15.2%' },
  { id: '2', rank: 2, modelName: 'DALL-E 3', performanceChange: '+10.8%' },
  { id: '3', rank: 3, modelName: 'FLUX 1L', performanceChange: '+5.8%' },
];

const TRENDINGMODEL = [
  { id: '1', rank: 1, modelName: 'ChatGPT-4o', performanceChange: '+12.5%' },
  { id: '2', rank: 2, modelName: 'DeepSeek R1', performanceChange: '-8.3%' },
  { id: '3', rank: 3, modelName: 'Claude Sonnet', performanceChange: '-3.1%' },
];

export default component$(() => {
  const store = useStore({
    trendingModels: TRENDINGMODEL,
    featuredModels: FEATUREDMODEL,
    stats: [] as Array<{ label: string; value: string | number }>,
    loading: false,
    error: null as string | null,
  });

  const homeDataResource = useResource$(async () => {
    store.loading = true;
    store.error = null;
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const stats = [
        { label: 'Total Models', value: 1284 },
        { label: 'Total Labs', value: 42 },
        { label: 'Users Online', value: 321 },
        { label: 'Top Category', value: 'NLP' },
      ];
      return { stats };
    } catch (err: any) {
      store.error = err.message;
      return null;
    } finally {
      store.loading = false;
    }
  });

  return (
      <Resource
        value={homeDataResource}
        onPending={() => <UIAtom type="loader" />}
        onRejected={(error) => (
          <div class="text-red-500 p-4 text-center">{error.message}</div>
        )}
        onResolved={(res) => {
          if (!res) return <div class="p-4 text-center">No data found.</div>;
          store.stats = res.stats;

          return (
            <div class="space-y-16">
              {/* Hero Section */}
              <UIOrganism type="hero" data={{ categories: AI_CATEGORIES, featuredModels: FEATURED_MODELS } as any} />
             
              {/* Trending Models */}
              <section class="container my-auto mx-auto p-4 mb-16">
                <h2 class="text-2xl font-bold my-auto mb-6 text-light">
                  Trending AI Models
                </h2>
                <UIOrganism type="trending-models" data={store.trendingModels} />
              </section>

              {/* Featured Models */}
              <section class="container mx-auto p-4 mb-16">
                <h2 class="text-2xl font-bold mb-6 text-light">
                  Featured Models
                </h2>
                <UIOrganism type="featured-models" data={store.featuredModels} />
              </section>

              {/* Stats */}
              <section class="container mx-auto p-4 mb-16">
                <UIOrganism type="stats" data={store.stats} />
              </section>

              {/* Editors' Choice */}
              <section class="container mx-auto p-4 mb-16">
                <h2 class="text-2xl font-bold mb-6 text-light">
                  Editors’ Choice
                </h2>
                <UIOrganism type="leaderboard" />
              </section>

              {/* Categories */}
              <section class="container mx-auto p-4 mb-16">
                <h2 class="text-2xl font-bold mb-6 text-light">
                  Explore Categories
                </h2>
                <UIOrganism type="category-grid" />
              </section>
            </div>
          );
        }}
      />
  );
});

// Define the document head
export const head = {
  title: 'AI Model Store - Home',
  meta: [
    { name: 'description', content: 'Discover and explore AI models.' },
  ],
};