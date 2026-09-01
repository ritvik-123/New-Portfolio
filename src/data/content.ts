import { withBasePath } from "@/lib/basePath";

export const images = {
  background: withBasePath("/images/background.jpg"),
  avatar: withBasePath("/images/avatar.jpg"),
  sideAvatar: withBasePath("/images/side-avatar.jpg"),
  cs: withBasePath("/images/cs.jpg"),
  mechHero: withBasePath("/images/mech-proj1.jpg"),
  mechAccent: withBasePath("/images/ml-manu-2.jpg"),
  faceTracking: withBasePath("/images/mech-proj2.jpg"),
  rotacam: withBasePath("/images/mech-proj3.jpg"),
  alienFury: withBasePath("/images/alien-fury.jpg"),
  dogVision: withBasePath("/images/dog-vision.jpg"),
  empLive: withBasePath("/images/emp-live.jpg"),
  maskDetection: withBasePath("/images/ml-mask-detection.jpg"),
  manufacturing: withBasePath("/images/ml-manu-1.jpg"),
  roadRash: withBasePath("/images/roadrash.jpg"),
  unity: withBasePath("/images/unity.jpg"),
  liftFormVisionPoster: withBasePath("/images/liftformvision-poster.jpg"),
  liftFormVisionDemo: withBasePath("/images/liftformvision-demo.mp4"),
};

export const profile = {
  name: "Ritvik Mahapatra",
  greeting: ["Wassup gng!!!", "Ritvik here!"],
  title: "AI Engineer, MS Computer Science @ Fresno State",
  tagline:
    "I build end to end ML systems, from real time computer vision to NLP classification pipelines, using Python, PyTorch, and TensorFlow, deployed to production on GCP with FastAPI and Docker. Currently open to SDE, AI, and ML roles.",
  bio: [
    "I'm a Master's student in Computer Science at California State University, Fresno (GPA 3.87/4.00), where I also work as a Teaching Associate leading lab sessions in Computer Architecture, Data Structures, and C++. Before that, I completed a B.Tech in Mechatronics Engineering at Manipal University, Jaipur (GPA 3.52/4.00, Dean's List x7).",
    "My work sits at the intersection of computer vision, NLP, and deployment engineering. I apply pose estimation and deep learning to real time video analysis, and build classification pipelines that go all the way from a research notebook to a live, self improving cloud service.",
  ],
  location: "Fresno, CA",
  resumeUrl: withBasePath("/resume.pdf"),
  avatarUrl: images.avatar,
  sideAvatarUrl: images.sideAvatar,
};

export const socials = {
  email: "ritvik.mahapatra@yahoo.com",
  github: "https://github.com/ritvik-123",
  linkedin: "https://www.linkedin.com/in/ritvik-mahapatra/",
  scholar: "https://scholar.google.com/citations?user=fK8bCtAAAAAJ&hl=en",
  leetcode: "https://leetcode.com/u/ritvikmahapatra4/",
  twitter: "",
};

export type SkillGroup = { label: string; skills: string[] };

export const skills: SkillGroup[] = [
  { label: "Programming Languages", skills: ["C", "C++", "C#", "Python", "Java", "SQL"] },
  {
    label: "ML / DL Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow/Keras",
      "NumPy",
      "scikit-learn",
      "Hugging Face Transformers",
      "Sentence-Transformers",
      "MediaPipe",
      "OpenCV",
    ],
  },
  { label: "Backend & Deployment", skills: ["FastAPI", "Flask", "Docker", "Groq API"] },
  {
    label: "Cloud & MLOps",
    skills: [
      "Google Cloud Platform",
      "Cloud Run",
      "Cloud Build",
      "Firestore",
      "Cloud Storage",
      "Cloud Scheduler",
      "AWS",
      "Azure",
      "CI/CD",
      "MLOps",
    ],
  },
  { label: "Data & Databases", skills: ["MySQL", "MongoDB", "PySpark", "Hive", "Hadoop HDFS"] },
  {
    label: "AI & ML Concepts",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Vision Transformers",
      "Generative AI",
      "LLMs",
    ],
  },
  { label: "Other Tools", skills: ["Unity", "XR Interaction Toolkit", "OpenXR", "Git", "MATLAB"] },
];

export type ProjectCategory = "mechatronics" | "cs";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
  image?: string;
  video?: string;
  link?: string;
  repo?: string;
};

export const projectCategories: Record<
  ProjectCategory,
  { label: string; short: string; heroImage: string }
> = {
  mechatronics: {
    label: "Bachelor's in Mechatronics Engineering, Manipal University Jaipur",
    short: "Mechatronics",
    heroImage: images.mechHero,
  },
  cs: {
    label: "Master's in Computer Science, CSU Fresno",
    short: "Computer Science",
    heroImage: images.cs,
  },
};

export const projects: Project[] = [
  // Mechatronics (B.Tech) — 5
  {
    title: "Quality Detection using CV in Production Line",
    description:
      "Three case studies applying machine learning to a manufacturing line: a Random Forest model that predicts failure types with 90% accuracy, YOLOv3 combined with K Means clustering to segment products on a conveyor belt, and a MobileNetV2 transfer learning classifier that flags defective products with 89.5% accuracy, exported as a quantized TFLite model for on device quality control.",
    tags: ["Python", "TensorFlow", "YOLOv3", "scikit-learn", "OpenCV"],
    category: "mechatronics",
    featured: true,
    image: images.manufacturing,
    repo: "https://github.com/ritvik-123/Major-Project-ML-in-Manufacturing",
  },
  {
    title: "Rotacam, an Object Tracking Camera",
    description:
      "An Arduino based object detector and following camera with two degrees of freedom, using ultrasonic sensors to track and follow objects in real time.",
    tags: ["Arduino", "C++", "Robotics"],
    category: "mechatronics",
    image: images.rotacam,
    repo: "https://github.com/ritvik-123/PBL-ObjectDetection-Follower",
  },
  {
    title: "Face Tracking Camera",
    description:
      "Real time face detection using OpenCV Haar cascades, driving a two servo (2 DOF) Arduino controlled camera mount for continuous face tracking.",
    tags: ["OpenCV", "Arduino", "C++"],
    category: "mechatronics",
    image: images.faceTracking,
    repo: "https://github.com/ritvik-123/PBL-Face-Tracking-Camera",
  },
  {
    title: "Face Mask Detection",
    description:
      "A face mask classifier built with MobileNet and ResNet in TensorFlow, with real time detection using an SSD face detector in OpenCV. This project became the basis for two published papers on deep learning approaches to face mask classification.",
    tags: ["TensorFlow", "MobileNet", "ResNet", "OpenCV"],
    category: "mechatronics",
    image: images.maskDetection,
    repo: "https://github.com/ritvik-123/ML-Face-Mask-Detection",
  },
  {
    title: "Dog Breed Vision",
    description:
      "A MobileNetV2 based image classifier that predicts a dog's breed from a photo, built with TensorFlow.",
    tags: ["TensorFlow", "MobileNetV2", "Computer Vision"],
    category: "mechatronics",
    image: images.dogVision,
    repo: "https://github.com/ritvik-123/ML-Dog-Vision",
  },

  // CS (M.S.) — 6
  {
    title: "LiftFormVision",
    description:
      "A locally deployed computer vision app that analyzes barbell exercise video (squat, overhead press, and barbell row) and reports form errors in real time, no coach required. Squat depth error detection reaches 0.846 F1, and overhead press uses a temporal CNN knee error classifier. It supports both video upload and live camera capture through a Flask app running isolated inference pipelines per exercise.",
    tags: ["Python", "Flask", "MediaPipe", "TensorFlow", "OpenCV"],
    category: "cs",
    featured: true,
    image: images.liftFormVisionPoster,
    video: images.liftFormVisionDemo,
    repo: "https://github.com/ritvik-123/LiftFormVision",
  },
  {
    title: "EMP Sentence Classifier for Oppression Types",
    description:
      "A full stack NLP system that classifies sentences into four oppression types (ideological, institutionalized, interpersonal, and internalized) using sentence embeddings, SVD, and logistic regression, reaching 77.8% accuracy and 96.3% top 2 accuracy. It's deployed on Google Cloud Run with GCS based model hot reloading and closed loop weekly retraining from user feedback.",
    tags: ["Python", "FastAPI", "scikit-learn", "GCP", "Docker"],
    category: "cs",
    featured: true,
    image: images.empLive,
    link: "https://emp-project-452416352424.us-central1.run.app",
    repo: "https://github.com/ritvik-123/EMP-Project",
  },
  {
    title: "Unity VR Interaction Environment",
    description:
      "A shared Unity and XR testbed built for a Human Computer Interaction course, with a persistent XR rig, event driven feedback, and a modular object manipulation framework supporting six HCI interaction techniques. Validated through user testing with over 10 participants.",
    tags: ["Unity", "C#", "XR Interaction Toolkit"],
    category: "cs",
    featured: true,
    image: images.unity,
    repo: "https://github.com/ritvik-123/Unity-Based-VR-Environment",
  },
  {
    title: "Alien Fury, an OpenGL Endless Runner",
    description:
      "A 3D endless runner game built in OpenGL for an Advanced Game Development course, with MD2 model animation, multi layer parallax backgrounds, procedural obstacle spawning, and a full menu and level progression system across three levels.",
    tags: ["C++", "OpenGL"],
    category: "cs",
    image: images.alienFury,
    repo: "https://github.com/ritvik-123/AlienFury-CSCI-291t-AGD-MidGame",
  },
  {
    title: "Road Rash, an OpenGL Racing Game",
    description:
      "The final project for Advanced Game Development, an obstacle dodging bike racing game built in OpenGL and GLUT, with three levels, day and night environment variation, and sprite based character animation.",
    tags: ["C++", "OpenGL", "GLUT"],
    category: "cs",
    image: images.roadRash,
    repo: "https://github.com/ritvik-123/RoadRash",
  },
  {
    title: "Essay Rubric Text Classification",
    description:
      "Classifies IELTS writing section essays against grading rubrics (task response, coherence and cohesion, and lexical resource) using fine tuned BERT embeddings, helping graders see each submission broken down by requirement.",
    tags: ["Python", "BERT", "NLP"],
    category: "cs",
    repo: "https://github.com/ritvik-123/264-Text-classification",
  },
];

const featuredOrder = [
  "LiftFormVision",
  "EMP Sentence Classifier for Oppression Types",
  "Unity VR Interaction Environment",
  "Quality Detection using CV in Production Line",
];

export const featuredProjects = featuredOrder.map(
  (title) => projects.find((p) => p.title === title)!,
);

export type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  abstract?: string;
};

export const papers: Paper[] = [
  {
    title:
      "IMVS: Interactive Medical Volume Segmentation with Test-Time Adaptation — A New Method for Annotating Radiology Datasets",
    authors: "R. Mahapatra, A. S. Reen, K. Borkar",
    venue: "MICCAI HAIC Workshop",
    year: "2026",
    link: socials.scholar,
    abstract: "Accepted, pending publication.",
  },
  {
    title: "Brief Review of Deep Learning Techniques Employed in Face Mask Classification",
    authors: "S. Rahul, R. Mahapatra, K. Gaurav",
    venue: "AIMLA",
    year: "2024",
    link: socials.scholar,
  },
  {
    title: "Real Time Quality Assessment in a Production Line: Machine Learning Approach",
    authors: "R. Mahapatra, K. Gaurav",
    venue: "MoSICom",
    year: "2023",
    link: "https://ieeexplore.ieee.org/abstract/document/10458752",
  },
  {
    title: "Comparative Analysis of Face Mask Detection Models Using Deep Learning Techniques",
    authors: "R. Mahapatra, K. Gaurav",
    venue: "ICCCNT",
    year: "2023",
    link: socials.scholar,
  },
];
