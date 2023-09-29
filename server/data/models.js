const models = [
  {
    id: 1,
    name: "GPT-1",
    modelSize: "110M",
    type: "LLM (Language Model)",
    capabilities:
      "GPT-1 was OpenAI's initial attempt at a language-based model. It was trained on books and other texts, and while it was a significant step forward, it had limitations in generating coherent and contextually relevant text over longer passages.",
    description:
      "OpenAI's first language model trained on books and texts with limited coherence.",
    organization: "OpenAI",
    release_date: "2018-01-01",
    image_url: "https://i.imgur.com/WsrSgXf.png",
  },
  {
    id: 2,
    name: "GPT-2",
    modelSize: "1.5B",
    type: "LLM (Language Model)",
    capabilities:
      "GPT-2 showcased improved contextual understanding and was capable of generating more coherent and diverse text over longer passages. However, due to concerns about potential misuse, OpenAI initially withheld the release of the trained model.",
    description:
      "An advanced language model by OpenAI with improved contextual understanding.",
    organization: "OpenAI",
    release_date: "2019-01-01",
    image_url: "https://i.imgur.com/WsrSgXf.png",
  },
  {
    id: 3,
    name: "GPT-3",
    modelSize: "175B",
    type: "LLM (Language Model)",
    capabilities:
      "GPT-3 made significant advances in contextual and task-based operations. With 175 billion parameters, it could perform tasks without task-specific training data, making it versatile for various applications from translation to content creation.",
    description:
      "A versatile language model by OpenAI capable of diverse tasks without training.",
    organization: "OpenAI",
    release_date: "2020-01-01",
    image_url: "https://i.imgur.com/WsrSgXf.png",
  },
  {
    id: 4,
    name: "GPT-4",
    modelSize: "N/A",
    type: "LLM (Language Model)",
    capabilities:
      "GPT-4, being a more advanced version, likely offers even more sophisticated natural language processing capabilities, understanding context better and generating even more coherent text. Specific details might need further research.",
    description:
      "OpenAI's advanced language model with enhanced natural language processing.",
    organization: "OpenAI",
    release_date: "2023-01-01",
    image_url: "https://i.imgur.com/WsrSgXf.png",
  },
  {
    id: 5,
    name: "Llama 1",
    modelSize: "65B",
    type: "LLM (Language Model)",
    capabilities:
      "LLaMA (Large Language Model Meta AI) was introduced as a state-of-the-art foundational large language model designed to help researchers advance their work in the AI subfield. It was trained on a large set of unlabeled data, making it ideal for fine-tuning for various tasks. LLaMA is available in several sizes (7B, 13B, 33B, and 65B parameters). The model was trained on 1.4 trillion tokens for the 65B and 33B versions, and the smallest model, LLaMA 7B, was trained on one trillion tokens. It was designed to be versatile and can be applied to many different use cases.",
    description:
      "Meta AI's foundational language model designed for research, trained on up to 1.4 trillion tokens.",
    organization: "Meta AI",
    release_date: "2023-02-24",
    image_url:
      "https://seeklogo.com/images/M/meta-icon-new-facebook-2021-logo-83520C311D-seeklogo.com.png",
  },
  {
    id: 6,
    name: "Llama 2",
    modelSize: "70B",
    type: "LLM (Language Model)",
    capabilities:
      "Llama 2 is the next generation of Meta's open-source large language model. It includes pretrained and fine-tuned versions, ranging from 7B to 70B parameters. Llama 2 pretrained models are trained on 2 trillion tokens and have double the context length than Llama 1. Its fine-tuned models have been trained on over 1 million human annotations. Llama 2 outperforms other open-source language models on many benchmarks, including reasoning, coding, proficiency, and knowledge tests. The model also includes specialized versions like Llama Chat and Code Llama, with the latter being trained on 500B tokens of code.",
    description:
      "Meta's next-gen open-source language model trained on 2 trillion tokens with versions like Llama Chat and Code Llama.",
    organization: "Meta AI",
    release_date: "2023-01-01",
    image_url:
      "https://seeklogo.com/images/M/meta-icon-new-facebook-2021-logo-83520C311D-seeklogo.com.png",
  },
  {
    id: 7,
    name: "GPT-3.5",
    modelSize: "175B",
    type: "LLM (Language Model)",
    capabilities:
      "GPT-3.5, an advanced version of GPT-3, powers ChatGPT and can handle a series of messages as input, improving interaction with context-aware responses.",
    description:
      "OpenAI's latest language model enhancing chatbot capabilities.",
    organization: "OpenAI",
    release_date: "2022-03-15",
    image_url: "https://i.imgur.com/WsrSgXf.png",
  },
  {
    id: 8,
    name: "PaLM 2 (Bison-001)",
    modelSize: "340B",
    type: "LLM (Language Model)",
    capabilities:
      "Advanced reasoning, code/math processing, classification, question answering, translation (100 languages), natural language generation, and various language tasks.",
    description: "Google's next-gen LLM built on Pathways AI architecture.",
    organization: "Google",
    release_date: "2023-05-01",
    image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Google_PaLM_Logo.svg/640px-Google_PaLM_Logo.svg.png",
  },
];

export default models;
