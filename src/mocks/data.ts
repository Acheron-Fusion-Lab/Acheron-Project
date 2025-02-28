// ~/mocks/data.ts
import { Lab, Category, Model } from '~/types/models';

export const mockLabs: Lab[] = [
  {
    id: 1,
    name: 'Lab A',
    reputation: 95,
    models_count: 150,
    papers_count: 200,
    funding: 5000000,
    location: 'New York',
    avatar_url: '',
    trending_score: 85,
  },
  {
    id: 2,
    name: 'Lab B',
    reputation: 88,
    models_count: 120,
    papers_count: 150,
    funding: 3000000,
    location: 'London',
    avatar_url: '',
    trending_score: 72,
  },
];

export const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Category A',
    model_count: 200,
    weekly_trend: 5,
    dominance: 0.3,
    total_compute_cost: 1000000,
    top_model: 'Model X',
    icon_url: '/category-a.jpg',
    domain: 'AI',
  },
  {
    id: 2,
    name: 'Category B',
    model_count: 150,
    weekly_trend: -2,
    dominance: 0.25,
    total_compute_cost: 800000,
    top_model: 'Model Y',
    icon_url: '/category-b.jpg',
    domain: 'ML',
  },
];

export const mockModels: Model[] = [
  {
    id: '1',
    name: 'Model 1',
    description: 'A powerful AI model.',
    documentationUrl: 'https://example.com/docs',
    repositoryUrl: 'https://github.com/example/repo',
    performanceMetrics: {
      accuracy: 0.95,
      precision: 0.9,
      recall: 0.85,
      f1Score: 0.87,
    },
    feedback: [
      {
        id: 1,
        userId: 'user1',
        username: 'User1',
        comment: 'Great model!',
        rating: 5,
        createdAt: new Date().toISOString(),
      },
    ],
  },
  // Add more mock models as needed
];

export const AI_CATEGORIES = [
  { id: '2', name: 'Vision Models', icon: '/icons/vision.png', link: '/categories/vision' },
  { id: '3', name: 'Speech Recognition', icon: '/icons/speech.png', link: '/categories/speech' },
  { id: '4', name: 'Chatbots', icon: '/icons/chatbot.png', link: '/categories/chatbot' },
  { id: '5', name: 'Generative Models', icon: '/icons/generative.png', link: '/categories/generative' },
  { id: '6', name: 'Recommendation Systems', icon: '/icons/recommendation.png', link: '/categories/recommendation' },
  { id: '7', name: 'Reinforcement Learning', icon: '/icons/reinforcement.png', link: '/categories/reinforcement' },
  { id: '8', name: 'Multimodal Models', icon: '/icons/multimodal.png', link: '/categories/multimodal' },
  { id: '9', name: 'Transfer Learning', icon: '/icons/transfer.png', link: '/categories/transfer' },
  { id: '10', name: 'Deep Learning', icon: '/icons/deep.png', link: '/categories/deep' },
  { id: '11', name: 'Anomaly Detection', icon: '/icons/anomaly.png', link: '/categories/anomaly' },
  { id: '12', name: 'Time Series Analysis', icon: '/icons/timeseries.png', link: '/categories/timeseries' },
  { id: '13', name: 'Predictive Analytics', icon: '/icons/predictive.png', link: '/categories/predictive' },
  { id: '14', name: 'Robotics AI', icon: '/icons/robotics.png', link: '/categories/robotics' },
  { id: '15', name: 'Edge AI', icon: '/icons/edge.png', link: '/categories/edge' },
  { id: '16', name: 'Ethical AI', icon: '/icons/ethical.png', link: '/categories/ethical' },
  { id: '17', name: 'Explainable AI', icon: '/icons/explainable.png', link: '/categories/explainable' },
  { id: '18', name: 'Neural Network Architectures', icon: '/icons/neural.png', link: '/categories/neural' },
  { id: '19', name: 'Emotion Recognition', icon: '/icons/emotion.png', link: '/categories/emotion' },
  { id: '20', name: 'Knowledge Graph Models', icon: '/icons/knowledge.png', link: '/categories/knowledge' },
  { id: '21', name: 'Data Augmentation Models', icon: '/icons/data-augmentation.png', link: '/categories/data-augmentation' }
  
  // Add more relevant AI categories
];

export const FEATURED_MODELS = [
  {
    id: '1',
    tag: 'NEW',
    headline: 'GPT-4',
    subheadline: 'The latest language model from OpenAI.',
    price: 'From $0.03 per 1K tokens',
    image: '/images/gpt4.png',
    ctaText: 'Learn More',
    ctaLink: '/models/gpt4'
  },
  {
    id: '2',
    tag: 'POPULAR',
    headline: 'GPT-3',
    subheadline: 'A powerful language model by OpenAI.',
    price: 'From $0.02 per 1K tokens',
    image: '/images/gpt3.png',
    ctaText: 'Learn More',
    ctaLink: '/models/gpt3'
  },
  {
    id: '3',
    tag: 'MULTIMODAL',
    headline: 'DALL-E',
    subheadline: 'Generates images from text descriptions.',
    price: 'From $0.05 per image',
    image: '/images/dalle.png',
    ctaText: 'Explore',
    ctaLink: '/models/dalle'
  },
  {
    id: '4',
    tag: 'OPEN-SOURCE',
    headline: 'BERT',
    subheadline: 'Bidirectional Encoder Representations from Transformers.',
    price: 'Free',
    image: '/images/bert.png',
    ctaText: 'Learn More',
    ctaLink: '/models/bert'
  },
  {
    id: '5',
    tag: 'BREAKTHROUGH',
    headline: 'AlphaFold',
    subheadline: 'Predicts protein structures with high accuracy.',
    price: 'Free for academic use',
    image: '/images/alphafold.png',
    ctaText: 'Learn More',
    ctaLink: '/models/alphafold'
  },
  {
    id: '6',
    tag: 'OPEN-SOURCE',
    headline: 'Stable Diffusion',
    subheadline: 'Generates high-quality images from text prompts.',
    price: 'Free',
    image: '/images/stable-diffusion.png',
    ctaText: 'Try Now',
    ctaLink: '/models/stable-diffusion'
  },
  {
    id: '7',
    tag: 'NEW',
    headline: 'Whisper',
    subheadline: 'Automatic speech recognition system.',
    price: 'From $0.01 per minute',
    image: '/images/whisper.png',
    ctaText: 'Learn More',
    ctaLink: '/models/whisper'
  },
  {
    id: '8',
    tag: 'CODE-GEN',
    headline: 'CodeGen',
    subheadline: 'Generates code from natural language descriptions.',
    price: 'From $0.04 per 1K tokens',
    image: '/images/codegen.png',
    ctaText: 'Learn More',
    ctaLink: '/models/codegen'
  },
  {
    id: '9',
    tag: 'GAME-AI',
    headline: 'MuZero',
    subheadline: 'Masters games without knowing their rules.',
    price: 'Not applicable',
    image: '/images/muzero.png',
    ctaText: 'Learn More',
    ctaLink: '/models/muzero'
  },
  {
    id: '10',
    tag: 'EFFICIENT',
    headline: 'EfficientNet',
    subheadline: 'Scalable and efficient image classification model.',
    price: 'Free',
    image: '/images/efficientnet.png',
    ctaText: 'Learn More',
    ctaLink: '/models/efficientnet'
  },
  {
    id: '11',
    tag: 'OPEN-SOURCE',
    headline: 'T5',
    subheadline: 'Text-to-text transfer transformer by Google.',
    price: 'Free',
    image: '/images/t5.png',
    ctaText: 'Learn More',
    ctaLink: '/models/t5'
  },
  {
    id: '12',
    tag: 'MULTIMODAL',
    headline: 'CLIP',
    subheadline: 'Understands images and text together.',
    price: 'From $0.02 per query',
    image: '/images/clip.png',
    ctaText: 'Explore',
    ctaLink: '/models/clip'
  },
  {
    id: '13',
    tag: 'OPEN-SOURCE',
    headline: 'RoBERTa',
    subheadline: 'Robustly optimized BERT approach.',
    price: 'Free',
    image: '/images/roberta.png',
    ctaText: 'Learn More',
    ctaLink: '/models/roberta'
  },
  {
    id: '14',
    tag: 'AUDIO',
    headline: 'WaveNet',
    subheadline: 'High-fidelity speech synthesis by DeepMind.',
    price: 'From $0.03 per minute',
    image: '/images/wavenet.png',
    ctaText: 'Learn More',
    ctaLink: '/models/wavenet'
  },
  {
    id: '15',
    tag: 'POPULAR',
    headline: 'Midjourney',
    subheadline: 'Creates stunning AI-generated artwork.',
    price: 'From $0.06 per image',
    image: '/images/midjourney.png',
    ctaText: 'Try Now',
    ctaLink: '/models/midjourney'
  },
  {
    id: '16',
    tag: 'NEW',
    headline: 'PaLM',
    subheadline: 'Pathways Language Model by Google.',
    price: 'From $0.05 per 1K tokens',
    image: '/images/palm.png',
    ctaText: 'Learn More',
    ctaLink: '/models/palm'
  },
  {
    id: '17',
    tag: 'OPEN-SOURCE',
    headline: 'LLaMA',
    subheadline: 'Efficient language model by Meta.',
    price: 'Free',
    image: '/images/llama.png',
    ctaText: 'Learn More',
    ctaLink: '/models/llama'
  },
  {
    id: '18',
    tag: 'POWERFUL',
    headline: 'Megatron',
    subheadline: 'Large-scale language model by NVIDIA.',
    price: 'From $0.07 per 1K tokens',
    image: '/images/megatron.png',
    ctaText: 'Learn More',
    ctaLink: '/models/megatron'
  },
  {
    id: '19',
    tag: 'AUDIO',
    headline: 'Tacotron',
    subheadline: 'Text-to-speech model by Google.',
    price: 'From $0.02 per minute',
    image: '/images/tacotron.png',
    ctaText: 'Learn More',
    ctaLink: '/models/tacotron'
  },
  {
    id: '20',
    tag: 'CODE-GEN',
    headline: 'Codex',
    subheadline: 'Code generation model by OpenAI.',
    price: 'From $0.03 per 1K tokens',
    image: '/images/codex.png',
    ctaText: 'Try Now',
    ctaLink: '/models/codex'
  },
  {
    id: '21',
    tag: 'OPEN-SOURCE',
    headline: 'XLNet',
    subheadline: 'Advanced language model by Google.',
    price: 'Free',
    image: '/images/xlnet.png',
    ctaText: 'Learn More',
    ctaLink: '/models/xlnet'
  },
  {
    id: '22',
    tag: 'EFFICIENT',
    headline: 'Chinchilla',
    subheadline: 'Optimized language model by DeepMind.',
    price: 'From $0.04 per 1K tokens',
    image: '/images/chinchilla.png',
    ctaText: 'Learn More',
    ctaLink: '/models/chinchilla'
  },
  {
    id: '23',
    tag: 'POWERFUL',
    headline: 'Gopher',
    subheadline: 'Large language model by DeepMind.',
    price: 'From $0.06 per 1K tokens',
    image: '/images/gopher.png',
    ctaText: 'Learn More',
    ctaLink: '/models/gopher'
  },
  {
    id: '24',
    tag: 'OPEN-SOURCE',
    headline: 'OPT',
    subheadline: 'Open pre-trained transformer by Meta.',
    price: 'Free',
    image: '/images/opt.png',
    ctaText: 'Learn More',
    ctaLink: '/models/opt'
  },
  {
    id: '25',
    tag: 'OPEN-SOURCE',
    headline: 'BLOOM',
    subheadline: 'Multilingual model by BigScience.',
    price: 'Free',
    image: '/images/bloom.png',
    ctaText: 'Learn More',
    ctaLink: '/models/bloom'
  },
  {
    id: '26',
    tag: 'POWERFUL',
    headline: 'Jurassic-1',
    subheadline: 'Advanced language model by AI21 Labs.',
    price: 'From $0.05 per 1K tokens',
    image: '/images/jurassic-1.png',
    ctaText: 'Learn More',
    ctaLink: '/models/jurassic-1'
  },
  {
    id: '27',
    tag: 'NEW',
    headline: 'HyperCLOVA',
    subheadline: 'Language model by Naver.',
    price: 'From $0.04 per 1K tokens',
    image: '/images/hyperclova.png',
    ctaText: 'Learn More',
    ctaLink: '/models/hyperclova'
  },
  {
    id: '28',
    tag: 'OPEN-SOURCE',
    headline: 'ERNIE',
    subheadline: 'Enhanced language model by Baidu.',
    price: 'Free',
    image: '/images/ernie.png',
    ctaText: 'Learn More',
    ctaLink: '/models/ernie'
  },
  {
    id: '29',
    tag: 'POWERFUL',
    headline: 'WuDao',
    subheadline: 'Massive AI model by Beijing Academy of AI.',
    price: 'From $0.08 per 1K tokens',
    image: '/images/wudao.png',
    ctaText: 'Learn More',
    ctaLink: '/models/wudao'
  },
  {
    id: '30',
    tag: 'CODE-GEN',
    headline: 'AlphaCode',
    subheadline: 'Competitive programming AI by DeepMind.',
    price: 'From $0.05 per 1K tokens',
    image: '/images/alphacode.png',
    ctaText: 'Learn More',
    ctaLink: '/models/alphacode'
  },
  {
    id: '31',
    tag: 'MULTIMODAL',
    headline: 'Imagen',
    subheadline: 'High-quality image generation by Google.',
    price: 'From $0.07 per image',
    image: '/images/imagen.png',
    ctaText: 'Explore',
    ctaLink: '/models/imagen'
  },
  {
    id: '32',
    tag: 'NEW',
    headline: 'Parti',
    subheadline: 'Photorealistic image generator by Google.',
    price: 'From $0.06 per image',
    image: '/images/parti.png',
    ctaText: 'Learn More',
    ctaLink: '/models/parti'
  },
  {
    id: '33',
    tag: 'MULTIMODAL',
    headline: 'Muse',
    subheadline: 'Creative image generation by Google.',
    price: 'From $0.05 per image',
    image: '/images/muse.png',
    ctaText: 'Explore',
    ctaLink: '/models/muse'
  },
  {
    id: '34',
    tag: 'MULTIMODAL',
    headline: 'Gato',
    subheadline: 'Generalist AI model by DeepMind.',
    price: 'From $0.06 per 1K tokens',
    image: '/images/gato.png',
    ctaText: 'Learn More',
    ctaLink: '/models/gato'
  },
  {
    id: '35',
    tag: 'MULTIMODAL',
    headline: 'Flamingo',
    subheadline: 'Visual language model by DeepMind.',
    price: 'From $0.04 per query',
    image: '/images/flamingo.png',
    ctaText: 'Learn More',
    ctaLink: '/models/flamingo'
  },
  {
    id: '36',
    tag: 'SEARCH',
    headline: 'MUM',
    subheadline: 'Multimodal search model by Google.',
    price: 'From $0.03 per query',
    image: '/images/mum.png',
    ctaText: 'Learn More',
    ctaLink: '/models/mum'
  },
  {
    id: '37',
    tag: 'EFFICIENT',
    headline: 'Perceiver',
    subheadline: 'General perception model by DeepMind.',
    price: 'From $0.02 per 1K tokens',
    image: '/images/perceiver.png',
    ctaText: 'Learn More',
    ctaLink: '/models/perceiver'
  },
  {
    id: '38',
    tag: 'RL',
    headline: 'Decision Transformer',
    subheadline: 'Reinforcement learning model by OpenAI.',
    price: 'From $0.03 per 1K tokens',
    image: '/images/decision-transformer.png',
    ctaText: 'Learn More',
    ctaLink: '/models/decision-transformer'
  },
  {
    id: '39',
    tag: 'RL',
    headline: 'Dreamer',
    subheadline: 'World model for reinforcement learning.',
    price: 'From $0.04 per 1K tokens',
    image: '/images/dreamer.png',
    ctaText: 'Learn More',
    ctaLink: '/models/dreamer'
  },
  {
    id: '40',
    tag: 'VISION',
    headline: 'ViT',
    subheadline: 'Vision transformer by Google.',
    price: 'Free',
    image: '/images/vit.png',
    ctaText: 'Learn More',
    ctaLink: '/models/vit'
  },
  {
    id: '41',
    tag: 'VISION',
    headline: 'Swin Transformer',
    subheadline: 'Hierarchical vision transformer by Microsoft.',
    price: 'Free',
    image: '/images/swin-transformer.png',
    ctaText: 'Learn More',
    ctaLink: '/models/swin-transformer'
  },
  {
    id: '42',
    tag: 'VISION',
    headline: 'DeiT',
    subheadline: 'Data-efficient image transformer by Facebook.',
    price: 'Free',
    image: '/images/deit.png',
    ctaText: 'Learn More',
    ctaLink: '/models/deit'
  },
  {
    id: '43',
    tag: 'MULTIMODAL',
    headline: 'CLIP-ViT',
    subheadline: 'Vision and text model by OpenAI.',
    price: 'From $0.03 per query',
    image: '/images/clip-vit.png',
    ctaText: 'Explore',
    ctaLink: '/models/clip-vit'
  },
  {
    id: '44',
    tag: 'VISION',
    headline: 'DINO',
    subheadline: 'Self-supervised vision model by Facebook.',
    price: 'Free',
    image: '/images/dino.png',
    ctaText: 'Learn More',
    ctaLink: '/models/dino'
  },
  {
    id: '45',
    tag: 'VISION',
    headline: 'SimCLR',
    subheadline: 'Contrastive learning framework by Google.',
    price: 'Free',
    image: '/images/simclr.png',
    ctaText: 'Learn More',
    ctaLink: '/models/simclr'
  },
  {
    id: '46',
    tag: 'MULTIMODAL',
    headline: 'ALIGN',
    subheadline: 'Image and text alignment by Google.',
    price: 'From $0.02 per query',
    image: '/images/align.png',
    ctaText: 'Learn More',
    ctaLink: '/models/align'
  },
  {
    id: '47',
    tag: 'CODE-GEN',
    headline: 'InCoder',
    subheadline: 'Code generation model by Facebook.',
    price: 'Free',
    image: '/images/incoder.png',
    ctaText: 'Try Now',
    ctaLink: '/models/incoder'
  },
  {
    id: '48',
    tag: 'CODE-GEN',
    headline: 'PolyCoder',
    subheadline: 'Open-source code generator by Carnegie Mellon.',
    price: 'Free',
    image: '/images/polycoder.png',
    ctaText: 'Learn More',
    ctaLink: '/models/polycoder'
  },
  {
    id: '49',
    tag: 'POWERFUL',
    headline: 'MT-NLG',
    subheadline: 'Massive language model by NVIDIA and Microsoft.',
    price: 'From $0.07 per 1K tokens',
    image: '/images/mt-nlg.png',
    ctaText: 'Learn More',
    ctaLink: '/models/mt-nlg'
  },
  {
    id: '50',
    tag: 'POWERFUL',
    headline: 'Turing-NLG',
    subheadline: 'Natural language generation by Microsoft.',
    price: 'From $0.05 per 1K tokens',
    image: '/images/turing-nlg.png',
    ctaText: 'Learn More',
    ctaLink: '/models/turing-nlg'
  }
];