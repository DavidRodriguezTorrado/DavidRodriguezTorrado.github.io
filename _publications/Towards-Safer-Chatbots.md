---
title: "Towards Safer Chatbots: Automated Policy Compliance Evaluation of Custom GPTs"
collection: publications
permalink: /publication/towards-safer-chatbots
date: 2026-04-21
venue: 'Array, Volume 30 (2026), 100834'
citation: 'D. Rodriguez, W. Seymour, J.M. Del Alamo, J. Such. "Towards Safer Chatbots: Automated Policy Compliance Evaluation of Custom GPTs." <i>Array</i>, 30 (2026), 100834. https://doi.org/10.1016/j.array.2026.100834'
type: 'journal'
category: journals
paperurl: 'https://doi.org/10.1016/j.array.2026.100834'
doi: 'https://doi.org/10.1016/j.array.2026.100834'
excerpt: 'This paper presents an automated black-box method for evaluating whether Custom GPTs comply with marketplace usage policies. Applied to 782 GPT Store chatbots, the study finds that 58.7% produced at least one policy-violating response across Romantic, Cybersecurity, and Academic policy domains.'
---

### Abstract

User-configured chatbots built on top of large language models are increasingly deployed through centralized marketplaces such as the GPT Store. Although these platforms rely on usage policies and review mechanisms to prevent harmful or inappropriate behavior, the scale and opacity of customized chatbots make systematic policy enforcement difficult.

This paper presents a fully automated method for evaluating Custom GPT policy compliance through black-box interaction. The approach combines large-scale GPT discovery, policy-driven red-teaming prompts, and automated compliance assessment using an LLM-as-a-judge. The study focuses on three policy-relevant domains explicitly addressed in OpenAI's usage policies: Romantic, Cybersecurity, and Academic GPTs.

The compliance assessment component was validated against a human-annotated ground-truth dataset, achieving an F1 score of 0.975 for binary policy violation detection. The method was then applied to 782 Custom GPTs retrieved from the GPT Store, finding that 58.7% of evaluated GPTs exhibited at least one policy-violating response. The analysis further shows that many violations originate from base-model behavior, with customization often amplifying rather than creating new failure modes.

### Key Contributions

- Introduces a black-box automated auditing framework for evaluating Custom GPT compliance with marketplace usage policies.
- Combines GPT Store discovery, policy-driven red-teaming, and LLM-as-a-judge assessment into a scalable evaluation pipeline.
- Validates the automated compliance judge against human annotations, reaching an F1 score of 0.975 for binary violation detection.
- Evaluates 782 Custom GPTs across Romantic, Cybersecurity, and Academic policy domains, finding that 58.7% generated at least one policy-violating response.
- Releases supporting datasets and code through OSF and GitHub to support reproducibility and future chatbot governance research.

👉 [Read the full paper](https://doi.org/10.1016/j.array.2026.100834)

