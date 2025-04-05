---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
---

{% include base_path %}

Education
======
* Ph.D in Privacy Engineering, Universidad Politécnica de Madrid, 2025 (expected)
  Thesis: "Contributions to the automated assessment of ICT systems compliance with privacy and data protection requirements"
* M.S. in Cybersecurity, Universidad Politécnica de Madrid, 2022
* B.S. in Telecommunications Engineering, Universidad Politécnica de Madrid, 2021

Work experience
======
* **Teaching Assistant**, Universidad Politécnica de Madrid — (*2023–Present*)  
  Member of the **STRAST** research group (Sistemas de Tiempo Real y Arquitectura de Servicios Telemáticos).  
  Teaching duties in the undergraduate course **ADSW (Software Analysis and Design)**, Escuela Técnica Superior de Ingenieros de Telecomunicación.

* **Research Assistant**, Universidad Politécnica de Madrid — (*2021–2023*)
  Member of the **STRAST** research group (Sistemas de Tiempo Real y Arquitectura de Servicios Telemáticos).
  Supervised by Professor José María del Álamo.
  
Skills
======

* Privacy Engineering
  * GDPR & data protection compliance
  * Data flow analysis (static & dynamic)
  * Privacy policy auditing

* Software Analysis & Design
  * UML, design patterns, version control (Git)
  * Agile & team-based development
  * Teaching experience

* Programming & Tooling
  * Python, Java, Bash
  * Frida, mitmproxy, ADB
  * RabbitMQ, Docker

* Natural Language Processing
  * Privacy policy classification
  * LLM prompting (GPT, Claude, etc.)
  * Text mining and labeling

* Research & Writing
  * Academic paper writing (PETS, IEEE, Springer)
  * Dataset creation and reproducibility
  * Experience presenting at international conferences

* Communication
  * Public speaking (oral & poster presentations)
  * Teaching and mentoring
  * English: C1 (accredited)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  