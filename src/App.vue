<template>
  <!-- Header Section -->
  <header>
    <h1><b>CS 6120 Final Project</b></h1>
    <h2>Using Mixture-of-Experts for ClinicalT5 to Improve Classification of Rare ICD Codes</h2>

    <p class="authors">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        >Yelena Yu</a
      >
    </p>

    <p class="affiliations">
      Northeastern University, Silicon Valley Campus
    </p>

  </header>

  <!-- Buttons Section -->
  <div class="button-container">
    <a
      href="https://www.overleaf.com/project/67fdb4573a4c24eb0ba1d54f"
      class="custom-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Writeup
    </a>
    <a
      href="https://github.com/YelenaYY/ICD-Prediction"
      class="custom-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
    <a
      href="/NLP_Final_Project.pdf"
      class="custom-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      SlidesShow
    </a>
  </div>

  <div class="abstract">
    <h3>Abstract</h3>
    <p align="justify">
      The automated assignment of ICD codes from clinical notes is a critical task in healthcare systems yet challenging due to the long-tail distribution of code frequencies. Although large language models (LLMs) such as ClinicalT5, ClinicalBERT, and MedBERT perform well on frequent codes, they often struggle with rare ones, leading to a risk of underdiagnosis. To address this, we propose a novel Mixture-of-Experts (MoE) framework by replacing the feed-forward network (FFN) layers in ClinicalT5 with MoE layers to enhance expert specialization. Building on architectural insights from models such as DeepSeekMoE and LLaMA 4, our design enables more efficient parameter utilization and specialization across code frequency ranges. Our model is evaluated on the MIMIC-IV dataset using F1 score and AUC-ROC, and results demonstrate improved performance, particularly on rare ICD codes, compared to dense and ensemble baselines. This work underscores the potential of sparsely activated, specialized transformer architectures in achieving more robust and equitable medical code prediction.
    </p>
  </div>

  <!-- Image Section -->
  <div class="image-container">
    <img src="/icd-code-distribution-diagram-1.png" alt="ICD Code Distribution Diagram 1" />
  </div>
  <div class="image-container">
    <img src="/icd-code-distribution-diagram-2.png" alt="ICD Code Distribution Diagram 2" />
  </div>

  <!-- Description Section -->
  <p class="description">
    Both commonly-used ICD9 and ICD10 frequency distribution follows Zipf's Law. The disparity in frequency of common and rare ICD codes is very severe. Over-representation of common codes lead to misdiagnosis of rare diseases.
  </p>

  <div class="image-container">
    <img src="/llm-architecture.png" alt="Solution | LLM Architecture" />
  </div>
  <div class="image-container">
    <img src="/moe-architecture.png" alt="Solution | MoE Architecture" />
  </div>

</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px auto;
  flex-wrap: wrap;
}

.custom-button {
  min-width: 120px;
  margin: 5px;
}

.image-container {
  display: flex;
  justify-content: center;
  margin: 25px auto;
  max-width: 1000px;
}

.image-container img {
  width: 100%;
  max-width: 1000px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.description {
  font-size: 14px;
  color: #555;
  text-align: center;
  max-width: 1000px;
  margin: 10px auto 20px auto;
  line-height: 1.5;
  padding: 0 20px;
}

.abstract {
  max-width: 1000px;
  margin: 20px auto;
  padding: 0 20px;
}

.abstract h3 {
  text-align: center;
  color: #333;
  margin-bottom: 15px;
}

.abstract p {
  font-size: 14px;
  line-height: 1.6;
  color: #444;
}
</style>
