export const projects = [
  
  {
    id: 1,
    title: "Repository Level Code Generation with LLMs",
    description: "Evaluated LLMs for generating code patches at the repository level using FEABench, a benchmark dataset from Microsoft Research. Compared multiple model configurations (baseline and documenter-augmented approaches) using multiple evaluation methods: similarity metrics (line similarity, sequence similarity, file overlap), LLM-as-a-judge assessment, and unit test pass rates. Developed evaluation pipelines to analyze how repository context affects code generation performance across different model architectures.",
    technologies: ["Python", "PyTorch", "Code Generation", "LLMs", "Software Engineering"],
    githubUrl: "https://github.com/ellaaraa/repository-level-code-generation",
    highlights: [
      "Evaluated multiple LLM architectures for repository-level patch generation",
      "Implemented comprehensive evaluation using similarity metrics, LLM judges, and unit test validation",
      "Hands-on project in automated code generation and software engineering"
    ]
  },
  {
    id: 2,
    title: "Knowledge Guided Decoding",
    description: "Implemented Knowledge-Guided Decoding (KGD), a decoding technique that incorporates external knowledge to improve generation quality and accuracy in language models. The implementation follows the core KGD algorithm from the research paper, which modifies token selection during generation by computing knowledge-guided rewards for candidate tokens and adjusting logits accordingly. The system features document chunking and retrieval using sentence transformers, three reward functions (similarity-based, entailment-based, and combined), and a decoding algorithm that steers generation toward more factual outputs. Evaluated on the Natural Questions dataset using OLMoE and Llama models, with comprehensive experimental comparisons across multiple reward configurations and hyperparameters.",
    technologies: ["Python", "PyTorch", "NLP", "Machine Learning", "Sentence Transformers"],
    githubUrl: "https://github.com/Ellaaraa/moe-knowledge-guided-decoding",
    highlights: [
      "Implemented KGD algorithm with document retrieval and three reward functions",
      "Built evaluation framework with Exact Match and F1 metrics",
      "Created experimental comparison system with visualization tools"
    ]
  },
  {
    id: 3,
    title: "Blood Donors Engagement",
    description: "Product management initiative focused on increasing blood donor engagement through data-driven insights and user experience optimization.",
    technologies: ["Product Management", "Data Analysis", "User Research", "Strategy"],
    githubUrl: "https://github.com/ellaaraa/blood-donors-engagement",
    highlights: [
      "Increased donor engagement through strategic initiatives",
      "Data-driven product decisions"
    ]
  },
  {
    id: 4,
    title: "Job Recommender",
    description: "NLP model using BERT to match jobs to candidates, improving recruitment efficiency and candidate-job fit.",
    technologies: ["Python", "BERT", "NLP", "Machine Learning"],
    githubUrl: "https://github.com/ellaaraa/job-recommendation-app",
    highlights: [
      "BERT-based semantic matching",
      "Improved recruitment efficiency"
    ]
  },
  {id: 5,
    title: "Uncovering Business Success Factors Through Machine Learning on Yelp Data",
    description: "Comprehensive machine learning analysis of Yelp restaurant reviews to identify factors driving business success. The project includes fine-tuning DistilBERT for sentiment classification on 1.6M+ reviews, applying SHAP for model interpretability, performing K-Means clustering to segment restaurants, and using CatBoost for rating prediction. Analyzed pre- and post-COVID sentiment trends and built evaluation pipelines to understand how business characteristics correlate with success metrics.",
    technologies: ["Python", "PyTorch", "DistilBERT", "SHAP", "CatBoost", "scikit-learn", "NLP", "Machine Learning", "Data Analysis"],
    githubUrl: "https://github.com/Ellaaraa/yelp_reviews_analysis",
    highlights: [
      "Fine-tuned DistilBERT for sentiment classification on 1.6M+ Yelp reviews with pre/post-COVID analysis",
      "Applied SHAP for model interpretability to identify key tokens driving sentiment predictions",
      "Implemented K-Means clustering with PCA to segment restaurants by price range and review patterns",
      "Built CatBoost classifier achieving 85% accuracy for business rating prediction with feature importance analysis"
    ]
}
];

