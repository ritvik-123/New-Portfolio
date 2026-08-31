export const profile = {
  name: "Ritvik Mahapatra",
  greeting: ["Wassup gng!!!", "Ritvik here!"],
  title: "AI Engineer — MS Computer Science @ Fresno State",
  tagline:
    "Building end-to-end ML systems — from real-time computer vision to NLP classification pipelines — with Python, PyTorch, and TensorFlow, deployed to production on GCP with FastAPI and Docker.",
  bio: [
    "I'm a Master's student in Computer Science at California State University, Fresno (GPA 3.87/4.00), where I also work as a Teaching Associate leading lab sessions in Computer Architecture, Data Structures, and C++. Before that, I completed a B.Tech in Mechatronics Engineering at Manipal University, Jaipur (GPA 3.52/4.00, Dean's List x7).",
    "My work sits at the intersection of computer vision, NLP, and deployment engineering — applying pose estimation and deep learning to real-time video analysis, and building classification pipelines that go from research notebook to a live, self-improving cloud service.",
  ],
  location: "Fresno, CA",
  resumeUrl: "/resume.pdf",
  avatarUrl: "https://avatars.githubusercontent.com/u/78790297?v=4",
};

export const socials = {
  email: "ritvik.mahapatra@yahoo.com",
  github: "https://github.com/ritvik-123",
  linkedin: "https://www.linkedin.com/in/ritvik-mahapatra/",
  scholar: "https://scholar.google.com/citations?user=fK8bCtAAAAAJ&hl=en",
  leetcode: "https://leetcode.com/u/ritvikmahapatra4/",
  twitter: "",
};

export type ProjectCategory = "mechatronics" | "cs";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  link?: string;
  repo?: string;
};

export const projectCategories: Record<ProjectCategory, string> = {
  mechatronics: "Bachelor's — Mechatronics Engineering, Manipal University Jaipur",
  cs: "Master's — Computer Science, CSU Fresno",
};

export const projects: Project[] = [
  // Mechatronics (B.Tech)
  {
    title: "ML in Manufacturing — Quality Assessment",
    description:
      "Three case studies applying ML to a manufacturing line: Random Forest failure-type prediction (90% accuracy), YOLOv3 + K-Means product segmentation on a conveyor belt, and a MobileNetV2 transfer-learning defect classifier (89.5% accuracy) exported to quantized TFLite for on-device QC inference.",
    tags: ["Python", "TensorFlow", "YOLOv3", "scikit-learn", "OpenCV"],
    category: "mechatronics",
    repo: "https://github.com/ritvik-123/Major-Project-ML-in-Manufacturing",
  },
  {
    title: "Rotacam — Object-Following Camera",
    description:
      "Arduino-based object detector and following camera with 2 degrees of freedom, using ultrasonic sensors to track and follow objects in real time.",
    tags: ["Arduino", "C++", "Robotics"],
    category: "mechatronics",
    repo: "https://github.com/ritvik-123/PBL-ObjectDetection-Follower",
  },
  {
    title: "Face-Tracking Camera",
    description:
      "Real-time face detection via OpenCV Haar cascades driving a two-servo (2 DOF) Arduino-controlled camera mount for continuous face tracking.",
    tags: ["OpenCV", "Arduino", "C++"],
    category: "mechatronics",
    repo: "https://github.com/ritvik-123/PBL-Face-Tracking-Camera",
  },
  {
    title: "Face Mask Detection",
    description:
      "Face mask classifier built with MobileNet and ResNet in TensorFlow, with real-time detection via an SSD face detector in OpenCV. Basis for two published papers on deep-learning approaches to face mask classification.",
    tags: ["TensorFlow", "MobileNet", "ResNet", "OpenCV"],
    category: "mechatronics",
    repo: "https://github.com/ritvik-123/ML-Face-Mask-Detection",
  },
  {
    title: "Dog Breed Vision",
    description:
      "MobileNetV2-based image classifier that predicts a dog's breed from a photo, built with TensorFlow.",
    tags: ["TensorFlow", "MobileNetV2", "Computer Vision"],
    category: "mechatronics",
    repo: "https://github.com/ritvik-123/ML-Dog-Vision",
  },

  // CS (M.S.)
  {
    title: "LiftFormVision",
    description:
      "Locally-deployed computer-vision app that analyzes barbell exercise video (squat, overhead press, barbell row) and reports form errors in real time, no coach required. Squat depth-error detection reaches 0.846 F1; overhead press uses a temporal-CNN knee-error classifier. Supports video upload and live-camera capture through a Flask app running per-exercise isolated inference pipelines.",
    tags: ["Python", "Flask", "MediaPipe", "TensorFlow", "OpenCV"],
    category: "cs",
    repo: "https://github.com/ritvik-123/LiftFormVision",
  },
  {
    title: "LiftFormVision — Research & Modeling",
    description:
      "Master's culminating project: the modeling and experimentation behind LiftFormVision, using subsets of Fitness-AQA (real gym footage, not mocap) to engineer features, calibrate thresholds, and train the temporal-CNN knee-error classifier that the deployed app runs.",
    tags: ["Python", "MediaPipe", "TensorFlow", "Jupyter"],
    category: "cs",
    repo: "https://github.com/ritvik-123/298-Major-Project",
  },
  {
    title: "EMP — Oppression-Type Sentence Classifier",
    description:
      "Full-stack NLP system classifying sentences into 4 oppression types (ideological, institutionalized, interpersonal, internalized) using sentence embeddings + SVD + logistic regression, reaching 77.8% accuracy and 96.3% top-2 accuracy. Deployed on Google Cloud Run with GCS-based model hot-reloading and closed-loop weekly retraining from user feedback.",
    tags: ["Python", "FastAPI", "scikit-learn", "GCP", "Docker"],
    category: "cs",
    link: "https://emp-project-452416352424.us-central1.run.app",
    repo: "https://github.com/ritvik-123/EMP-Project",
  },
  {
    title: "Unity VR Interaction Environment",
    description:
      "Shared Unity/XR testbed built for a Human-Computer Interaction course — persistent XR rig, event-driven feedback, and a modular object-manipulation framework supporting 6 HCI interaction techniques, validated through user testing with 10+ participants.",
    tags: ["Unity", "C#", "XR Interaction Toolkit"],
    category: "cs",
    repo: "https://github.com/ritvik-123/Unity-Based-VR-Environment",
  },
  {
    title: "Alien Fury — OpenGL Endless Runner",
    description:
      "3D endless-runner game built in OpenGL for an Advanced Game Development course — MD2 model animation, multi-layer parallax backgrounds, procedural obstacle spawning, and a full menu/level-progression system across 3 levels.",
    tags: ["C++", "OpenGL"],
    category: "cs",
    repo: "https://github.com/ritvik-123/AlienFury-CSCI-291t-AGD-MidGame",
  },
  {
    title: "Road Rash — OpenGL Racing Game",
    description:
      "Final project for Advanced Game Development: an obstacle-dodging bike racing game in OpenGL/GLUT with 3 levels, day/night environment variation, and sprite-based character animation.",
    tags: ["C++", "OpenGL", "GLUT"],
    category: "cs",
    repo: "https://github.com/ritvik-123/RoadRash",
  },
  {
    title: "Air Pollution Data Visualization",
    description:
      "Analysis of relationships between air pollution indicators and health metrics using SQL for querying/transformation and Tableau for interactive dashboards.",
    tags: ["SQL", "Tableau", "MySQL"],
    category: "cs",
    repo: "https://github.com/ritvik-123/226-FinalProject-DataViz",
  },
  {
    title: "Essay Rubric Text Classification",
    description:
      "Classifies IELTS writing-section essays against grading rubrics (task response, coherence & cohesion, lexical resource) using fine-tuned BERT embeddings, to help graders see submissions broken down by requirement.",
    tags: ["Python", "BERT", "NLP"],
    category: "cs",
    repo: "https://github.com/ritvik-123/264-Text-classification",
  },
];

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
