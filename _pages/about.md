---
permalink: /
title: "David Rodríguez Torrado"
author_profile: true
redirect_from: 
  - about/
  - /about.html
---

Welcome! I’m Assistant Professor and hold a Ph.D. in Privacy Engineering at the **Universidad Politécnica de Madrid (UPM)**, member of the Information Processing and Telecommunications Center ([IPTC](https://iptc.upm.es/)) and working within the [STRAST](https://www.upm.es/recursosidi/map/sistemas-de-tiempo-real-y-arquitectura-de-servicios-telematicos/) research group (Real-Time Systems and Service Architecture for Telematics). My research focuses on the **automated assessment of privacy and data protection compliance** in ICT systems, especially in the context of Android mobile apps and GDPR regulation.


---

### 🎓 About me

Since 2023, I teach **Software Analysis and Design (ADSW)** to second-year students at the **Escuela Técnica Superior de Ingenieros de Telecomunicación**, where I cover topics like software design, concurrent programming, and complexity analysis in Java.

Between 2021 and 2023, I worked as a Research Assistant at UPM, contributing to the nationally funded research project **AutoGDPR**, focused on automating the assessment of GDPR compliance, by doing privacy policy analysis and data flow auditing. Today, I continue this work as my main research line.

I currently serve as **Program Co-Chair** for the [International Workshop on Privacy Engineering (IWPE 2026)](https://iwpe.info/), co-located with the IEEE European Symposium on Security and Privacy, contributing to the technical program, paper review process, and workshop coordination.

---

### 🌍 International Research Collaboration
- 🇨🇭 **ETH Zurich** (Switzerland), since 2024  
  *Invited Postdoctoral Researcher* and *Research collaborator* in an interdisciplinary project led by Prof. Stefan Bechtold and LL.M. Luka Nenadic at the *Center for Law & Economics*.  
  - Conducted empirical research on large-scale multilingual privacy policy analysis to assess the impact of Switzerland's 2023 Federal Act on Data Protection (FADP) revision, developing an LLM-based pipeline that analyzes German, French, Italian, and English privacy policies without translation. The study analyzes privacy policies from more than 35,000 Swiss- and EU-facing websites and finds significant increases in data-subject-right disclosures after the reform.
  - The collaboration resulted in the paper “Overcoming Language Barriers: Multilingual Analysis of the Impact of a 2023 Swiss Privacy Law Revision”, accepted at *Proceedings on Privacy Enhancing Technologies* (PETS), 2026(4).
- 🇪🇨 **Escuela Politécnica Nacional** (Ecuador), since 2024  
  *Co-author* in an international project on the automated annotation of legal texts, in collaboration with Prof. Danny S. Guamán and Prof. José Estrada.   
  - Demonstrated that GPT-4o can perform multi-label, multi-class annotation of privacy policies with performance close to 80–90% of human annotators, greatly reducing manual effort.  
  - The collaboration resulted in the paper “GPT vs Human Legal Text Annotations: A Comparative Study with Privacy Policies”, published online in *Artificial Intelligence and Law* (2025) ([DOI: 10.1007/s10506-025-09488-0](https://doi.org/10.1007/s10506-025-09488-0)).
- 🇬🇧 **King’s College London** (UK), 2024-2025  
    *Visiting Ph.D. student* at the Department of Informatics, collaborating with Prof. William Seymour and Prof. Jose Such.  
  - Conducted research on automated policy compliance in conversational AI systems, developing a black-box auditing method that combines GPT Store discovery, policy-driven red-teaming prompts, and LLM-as-a-judge compliance assessment. Applied to 782 Custom GPTs, the method found that 58.7% produced at least one policy-violating response across Romantic, Cybersecurity, and Academic policy domains.
  - The collaboration resulted in the paper “Towards Safer Chatbots: Automated Policy Compliance Evaluation of Custom GPTs”, published in *Array* Journal, Volume 30 (2026), Article 100834 ([DOI: 10.1016/j.array.2026.100834](https://doi.org/10.1016/j.array.2026.100834)).
- 🇺🇸 **Carnegie Mellon University** (USA), since 2022  
  *Visiting Ph.D. student* at the School of Computer Science (2023), hosted by Prof. Norman Sadeh.  
  - Conducted research on large-scale mobile privacy auditing, combining LLM-based privacy policy analysis, privacy label comparison, data retention compliance assessment, and static/dynamic analysis of third-party library privacy settings. This work produced evidence of widespread disclosure gaps across app stores, privacy policies, privacy labels, and SDK configurations.
  - The collaboration resulted in **seven** joint publications, including “Privacy Settings of Third-Party Libraries in Android Apps: A Study of Facebook SDKs” (*Proceedings on Privacy Enhancing Technologies*, 2025), “Large Language Models: A New Approach for Privacy Policy Analysis at Scale” (*Computing*, 2024), “Sharing is Not Always Caring” (*IEEE Access*, 2024), and several IEEE EuroS&P Workshop papers on privacy labels and data retention.
- 🇨🇭 **ETH Zurich** (Switzerland), 2022-2025  
  *Research collaborator* in an interdisciplinary project led by Prof. Amit Zac and Prof. Stefan Bechtold at the *Center for Law & Economics*.  
  - Studied hidden noncompliance in digital markets by comparing what firms disclose in privacy policies with what their apps actually do. Using the Schrems II ruling as a natural experiment, the study analyzed more than 2,500 Android apps and showed that policy-based legal analysis can miss over 70% of observed privacy violations.
  - The collaboration resulted in the paper “Digital Markets and Hidden Noncompliance”, published in the *Journal of Legal Studies* (University of Chicago), Volume 55, Issue 2 (June 2026).
- 🇪🇨🇬🇧 **Escuela Politécnica Nacional and King's College London**, (Ecuador and UK) 2022-2023  
  *Co-author* in collaboration with Prof. Danny S. Guamán and Prof. Jose Such.
  - Developed an automated GDPR compliance assessment pipeline for cross-border personal data transfers in Android apps, combining dynamic traffic interception, IP geolocation, privacy policy analysis, and legal interpretation. Applied to 4,593 popular Android apps, the study found that many apps transferring personal data internationally failed to fully satisfy GDPR transparency obligations.
  - The collaboration resulted in the paper “Automated GDPR Compliance Assessment for Cross-Border Personal Data Transfers in Android Applications”, published in *Computers & Security*, Volume 130 (2023), Article 103262 ([DOI: 10.1016/j.cose.2023.103262](https://doi.org/10.1016/j.cose.2023.103262)).

---

### 🧪 Ph.D. Research

**Ph.D. in Privacy Engineering**, *Universidad Politécnica de Madrid (UPM)*.  
*Defended on July 8, 2025, with the highest honors (cum laude) and international doctorate distinction.*  

**Thesis title**: *Contributions to the Automated Assessment of Mobile Applications’ Compliance with Privacy and Data Protection Requirements*

My research addresses three key layers of analysis in mobile privacy:

- **What applications do:** I perform dynamic and static analyses of Android apps to identify privacy-impacting behavior, using tools like Frida and mitmproxy.
- **What applications say they do:** I apply **LLMs and NLP techniques** to evaluate privacy policies at scale and detect inconsistencies with behavior.
- **Who receives the data:** I investigate data recipients and cross-border transfers using network monitoring and IP geolocation strategies.

The outcomes of this work have been published in leading venues like **PETs**, **Computing**, **Computers & Security**, and **IEEE Access**.

---

### 🛠️ Research Projects

I actively contribute to research projects such as:

- **CEDAR** (*Horizon Europe*): Developing tools for improving public governance transparency, with a focus on knowledge graphs, data modeling and entity resolution.
- **AutoGDPR**: Designing technical solutions to automate GDPR compliance assessment, with public impact in press and academia.

---

### 👨🏻‍🏫 Teaching

Since 2023, I lecture in the second-year undergraduate course **Software Analysis and Design**, where I guide students through core software engineering techniques including:

- **Software design and debugging** fundamentals.
- **Algorithm design and analysis**, including sorting, dictionary structures, and graph algorithms.
- **Concurrent programming** using threads, with emphasis on mutual exclusion, synchronization, and deadlock prevention.
- **Complexity analysis** and architectural design of telecommunication systems.
- **Team-based software development**, version control, and lab exercises linked to real-world communication software challenges.
  
---

### 🎤 Presentations

I’ve presented my research at various international venues, including:
- Invited speaker at the *SPRINT Workshop on AI Security and Privacy 2026* in Valencia, Spain, with invited-speaker travel support, presenting “From Claims to Reality: Measuring Data Protection Compliance in Mobile Apps”, March 12, 2026.
- Invited speaker at *“Privacy and Accountability in the Femtech Industry in Europe”*, co-organized by Ius Omnibus and Universidad Complutense de Madrid, with support from the Digital Freedom Fund, December 18, 2025.
- Paper presentation at Privacy Enhancing Symposium 2025 (PETs)  
- Invited talk at Queen Mary University of London in 2024
- 🥈 *Second Best Presentation Award* at IWPE 2023 (IEEE EuroS&P Workshop)
- Poster at CyLab Partners Conference 2023 (*Carnegie Mellon University*) 
- 🥇 *Best Presentation Award* at IWPE 2022 (IEEE EuroS&P Workshop)
- Poster at SECRYPT 2022 in Lisbon

---

### 🧠 Skills

- **Privacy Engineering**: GDPR, compliance automation, policy analysis  
- **Software Development**: Python, Java, Git, UML, software design patterns  
- **Program Analysis**: Frida, mitmproxy, static/dynamic analysis  
- **NLP & LLMs**: Privacy policy classification, prompt engineering  
- **Academic Communication**: Paper writing, teaching, conference presentations  
- **Languages**: Spanish (native), English (C1 certified)

---

### 📄 Find out more

You can explore my:

- [Publications](/publications)
- [Projects](/projects)
- [Talks](/talks)
- [Teaching](/teaching)
- [CV](/cv)

Feel free to [contact me by email](mailto:david.rtorrado@upm.es) or connect through [Google Scholar](https://scholar.google.com.au/citations?user=bn1jm8QAAAAJ), [ORCID](https://orcid.org/0000-0002-0911-4608), or [ResearchGate](https://www.researchgate.net/profile/David-Rodriguez-Torrado).

---
