const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function generateScript(topic, audience, platform, length) {
  const prompt = `
You are an expert viral content strategist, storyteller, and script writer.

Create a highly engaging, high-retention script.

Topic: ${topic}
Audience: ${audience}
Platform: ${platform}
Length: ${length}

Follow this exact framework and return the output using the same headings.

==================================================
0. Psychology
==================================================

- Pain Point:
- Curiosity:
- Expectation vs Reality:

Identify:
• The audience's biggest pain point
• What creates curiosity
• What people expect
• The surprising reality revealed in the script

==================================================
1. Packaging
==================================================

- Title (Generate 5 options)
- Thumbnail Concept
- Core Idea

Requirements:
• Titles should be curiosity-driven
• Thumbnail should support the title
• Core Idea should be one powerful sentence

==================================================
2. Outline
==================================================

- What
- Why
- How
- Unique Perspective
- Differentiated Angle
- Novel Information

==================================================
3. Intro
==================================================

Write a strong opening using:

1. Context
2. Common Belief
3. Contrarian View
4. Proof
5. Plan

Requirements:
• Hook viewers immediately
• Create curiosity loops
• Make viewers want to keep watching

==================================================
4. Body
==================================================

For each major point use:

Point 1
- Concept
- Application
- Framing

Point 2
- Concept
- Application
- Framing

Point 3.js

- Concept
- Application
- Framing

Requirements:
• Use storytelling
• Use examples
• Use analogies
• Re-hook the audience regularly
• Keep attention high
• Transition smoothly between sections

==================================================
5. Outro
==================================================

- Recap
- Pain Solved
- Resources
- CTA (Call To Action)

CTA Requirements:
• Natural and non-pushy
• Relevant to the topic
• Encourage engagement
• Encourage comments
• Encourage subscriptions when appropriate
• Mention products/resources when relevant

==================================================
OUTPUT FORMAT
==================================================

Return the response in clean Markdown format with proper headings and bullet points.

Do not skip any section.
Make the content detailed, practical, engaging, and optimized for audience retention.
`;

  const response = await groq.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
});

return response.choices[0].message.content;
}

module.exports = { generateScript };