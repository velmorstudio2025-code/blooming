export type BlogSection = { id: string; heading: string; paragraphs: string[] };
export type BlogPost = {
  slug: string; title: string; description: string; category: string;
  image: string; imageAlt: string; author: string; publishedAt: string | null;
  updatedAt: string | null; sections: BlogSection[];
  faqs: { question: string; answer: string }[];
};

// EDIT: Set accurate publication dates when articles are actually published.
// EDIT: Replace the Unsplash editorial placeholders with licensed salon images.
export const posts: BlogPost[] = [
  {
    slug: 'how-to-choose-a-unisex-salon',
    title: 'How to Choose a Unisex Salon That Feels Right for You',
    description: 'A practical guide to finding a welcoming salon, communicating your goals and choosing services thoughtfully.',
    category: 'Salon Guides',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    imageAlt: 'Bright and thoughtfully arranged professional salon interior',
    author: 'Salon Editorial Team',
    publishedAt: null, updatedAt: null,
    sections: [
      { id: 'start-with-comfort', heading: 'Start with how you want to feel', paragraphs: [
        `Choosing a salon is not simply about picking a haircut from a picture. You are choosing a place where someone will listen to your preferences, work with your hair and help you feel comfortable expressing what you want. A welcoming environment matters whether you visit regularly, occasionally or for a special occasion. Look for a salon that describes its approach clearly and makes it easy to ask questions before you commit. You should not have to translate your personal style into narrow categories to receive respectful attention. The best starting point is straightforward: decide what a good experience would feel like to you, then look for a team whose communication and services match that expectation.`,
        `An inclusive unisex salon should treat personal style as individual rather than prescribe it according to gender. That means listening to the look you want, explaining available techniques and discussing what is realistic for your hair. Promotional language alone cannot prove how a team works, so pay attention to the details that can be verified. Is the service menu clear? Can you reach someone with a question? Do appointments include time for a consultation? These small signals can tell you more about the guest experience than a dramatic photograph.`
      ]},
      { id: 'review-the-services', heading: 'Read the services, not just the headlines', paragraphs: [
        `Salon menus can use similar words for very different experiences. A haircut might include a consultation, washing, styling or only the cut itself. Colour services may require an initial discussion or additional appointments. Before selecting a service, look for a description of what is involved and what is not. If the website does not provide enough information, ask for clarification. There is nothing awkward about requesting a more precise explanation, especially when you are booking a treatment that may take significant time or need ongoing maintenance.`,
        `Compare service descriptions against your personal goals. Someone seeking an easy everyday haircut may prioritise a manageable shape and simple styling advice. Someone considering a substantial colour change may want to know about the process, previous chemical treatments, possible limitations and care afterward. A thoughtful menu supports these decisions without promising identical results for every guest. Treat the online description as the beginning of a conversation, not a guarantee of a specific outcome.`
      ]},
      { id: 'look-for-consultation', heading: 'Notice how consultations are handled', paragraphs: [
        `An effective consultation is a two-way conversation. You explain the result you are hoping for, and the stylist explores your hair texture, previous services, maintenance preferences and daily routine. When a suggested look requires effort at home, it is useful to know that before the appointment. You can ask what tools or products the finish may require and whether there is a simpler alternative. Clear explanations help you make choices based on your real schedule and comfort, rather than the few minutes a finished style appears in a photograph.`,
        `Reference images can help, but they work best when used to discuss details rather than demand an exact copy. Identify what appeals to you: length, movement, shape, contrast, softness or a particular finish. Hair grows and behaves differently from person to person, so a professional may suggest adjustments. A good discussion leaves room for those differences and makes sure you understand the plan before work begins.`
      ]},
      { id: 'assess-hygiene', heading: 'Ask practical questions about hygiene and products', paragraphs: [
        `A polished interior can be beautiful, but good practice is more important than beautiful decor. You can reasonably ask about the salon's approach to cleaning reusable tools, maintaining workstations and selecting appropriate products. If you have a known sensitivity, tell the team before a product is applied. For colouring and certain chemical services, ask whether an allergy alert test or another precaution is required. A responsible salon should be comfortable discussing its process without making unsupported claims about safety or results.`,
        `If you are concerned about a persistent scalp condition or unusual hair loss, remember that a salon service is not a substitute for medical evaluation. Cosmetic treatments can be part of a personal-care routine, but they should not be marketed as a diagnosis or cure. A clear distinction between styling advice and medical questions is another helpful sign of professional communication.`
      ]},
      { id: 'evaluate-pricing', heading: 'Understand the cost before you book', paragraphs: [
        `Price is one consideration, but price alone cannot tell you whether a salon is suitable. A useful quotation explains what is included, whether additional services may be needed and when the final cost could change. For complex colouring or longer appointments, an estimate may depend on an in-person consultation. Ask whether any separate consultation charge applies and whether the quoted cost includes finishing and recommended products. Knowing this in advance helps avoid surprises and gives you space to make an informed decision.`,
        `If the online menu says “enquire for pricing,” treat that as an invitation to confirm details rather than assume the service will fit a particular budget. You can describe your goals and ask for a realistic range. It is also reasonable to discuss lower-maintenance alternatives if the original plan requires frequent visits or ongoing product purchases.`
      ]},
      { id: 'consider-convenience', heading: 'Consider location, timing and communication', paragraphs: [
        `A convenient location and clear appointment process can make a meaningful difference to your experience. Check the address using the salon's official contact details, confirm operating hours and consider the travel time that works for you. If you are visiting before an event, leave enough room in your schedule for consultation and styling. Do not assume a booking request is confirmed simply because a form accepted your details. Wait for an explicit appointment confirmation or use a booking system that clearly reserves a slot.`,
        `Pay attention to the way questions are answered. Helpful communication should be clear about availability, service limitations and what to prepare. A salon that explains changes or uncertainty respectfully can be easier to work with than one that makes extravagant promises. Reliability often appears in ordinary practical exchanges.`
      ]},
      { id: 'make-your-choice', heading: 'Choose the experience that suits you', paragraphs: [
        `The right salon is the one that aligns with your priorities: thoughtful listening, appropriate techniques, transparent information and an atmosphere where you can be yourself. There is no universal checklist that guarantees a perfect visit, and online photographs should never be your only evidence. Gather the information you need, ask direct questions and choose a service that fits your hair, comfort and routine. If you are unsure, begin with a consultation or a manageable service before considering a major change.`,
        `When you are ready, explore our service descriptions, read our care journal or send a booking enquiry with the details that matter to you. A strong salon relationship grows through conversation and mutual understanding. The aim is not to leave looking like someone else. It is to leave with a result that feels considered, comfortable and genuinely your own.`
      ]}
    ],
    faqs: [
      { question: 'Should I book a consultation first?', answer: 'A consultation is particularly useful for significant colour changes, unfamiliar services or specific sensitivities.' },
      { question: 'Can I bring inspiration photos?', answer: 'Yes. Photos help communicate shape and finish, although the result may need adapting to your hair.' }
    ]
  },
  {
    slug: 'hair-care-after-colour',
    title: 'Hair Care After Colour: A Thoughtful Maintenance Guide',
    description: 'Simple, practical habits for looking after coloured hair and planning your maintenance routine.',
    category: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    imageAlt: 'Professional beauty products in a salon setting',
    author: 'Salon Editorial Team',
    publishedAt: null, updatedAt: null,
    sections: [
      { id: 'new-colour', heading: 'Beautiful colour begins with realistic expectations', paragraphs: [
        `Fresh colour can make familiar hair feel entirely new, whether the change is barely noticeable or confidently expressive. The moment you leave the salon, however, your colour becomes part of your everyday routine. Water, washing habits, sunlight, styling tools and the original condition of your hair can all influence its appearance over time. Understanding that maintenance is individual helps you enjoy your new look without expecting a single product or routine to preserve it unchanged. The most useful advice begins with the exact service you received, because different colour techniques may involve different aftercare considerations.`,
        `Before leaving your appointment, ask your stylist to describe the care plan in plain language. Confirm when to wash, which products are appropriate, whether any special restrictions apply and how often a refresh might be needed. Generic internet rules are not always suitable for your particular service. A clear conversation is more valuable than buying a shelf full of products without knowing why you need them.`
      ]},
      { id: 'washing', heading: 'Make washing a considered part of your routine', paragraphs: [
        `There is no universal washing schedule for everyone with coloured hair. The right frequency depends on scalp comfort, hair texture, activity and the products you use. Overwashing may not suit some people, while delaying cleansing excessively may leave others uncomfortable. Choose a routine that keeps your scalp comfortable and your hair manageable. If you notice dryness, heaviness or irritation, ask your stylist whether your cleanser and washing approach match your needs.`,
        `Water temperature and handling can also affect how your hair feels. Many people find gentle washing and avoiding unnecessary friction more comfortable than vigorous scrubbing along the lengths. Apply cleanser according to the product instructions, rinse thoroughly and avoid assuming that stronger cleaning always gives a better result. The goal is a routine you can sustain, not an elaborate ritual that becomes difficult to follow.`
      ]},
      { id: 'conditioning', heading: 'Choose conditioning by how your hair behaves', paragraphs: [
        `Colour-treated hair can have different conditioning needs depending on its history and texture. A lightweight conditioner may suit one guest, while another may prefer a richer formulation. Start with what your hair actually feels like after cleansing. Does it tangle easily? Is it difficult to detangle without pulling? Does it feel weighed down by heavy products? These observations can guide a useful product discussion. A conditioner is not a substitute for professional evaluation when hair is severely compromised, and no product should be described as capable of reversing every form of damage.`,
        `Use masks and leave-in products according to their labels rather than layering them automatically. More product is not always better. When trying something new, introduce it thoughtfully so you can notice whether it improves the routine. If an ingredient or fragrance causes discomfort, discontinue use and seek suitable professional advice. Comfort and practicality deserve the same attention as the finished appearance.`
      ]},
      { id: 'heat', heading: 'Be mindful of heat and styling tools', paragraphs: [
        `Heat styling can be part of many looks, but repeated high-temperature exposure may contribute to dryness or breakage. Consider whether every styling session requires a heated tool, or whether air drying and lower-manipulation styles sometimes work for you. If you use a dryer or iron, follow the tool instructions and ask your stylist about temperatures and products suitable for your hair. Avoid copying someone else's setting simply because their result appears smooth online.`,
        `It can also help to separate the idea of styling from the idea of making hair perfectly uniform. Texture, movement and volume are natural features that do not always need to be corrected. A manageable routine often focuses on a comfortable finish rather than hours of daily effort. Tell your stylist what you are prepared to do at home, so the colour and cut can be discussed together.`
      ]},
      { id: 'outdoors', heading: 'Think about sun, swimming and everyday exposure', paragraphs: [
        `Outdoor activities can influence the look and feel of coloured hair. Sun exposure, swimming pool water, sea water and frequent washing may all play a role. If you spend considerable time outdoors or swim regularly, ask for product guidance suited to those conditions. Hats and practical protective habits may be useful in bright weather, but no single accessory or cosmetic product makes colour completely immune to change.`,
        `After swimming, follow sensible cleansing guidance and pay attention to how your hair feels. Avoid improvised chemical remedies or combining multiple strong products in an attempt to correct an unexpected tone. If colour changes in a way that concerns you, contact a qualified colour professional before attempting another processing treatment at home. Repeated corrective work without assessment can make future decisions more difficult.`
      ]},
      { id: 'tone', heading: 'Understand tone without chasing perfection', paragraphs: [
        `Colour gradually changes in appearance as hair grows and daily life continues. That change does not necessarily mean anything went wrong. Some looks are intentionally low contrast and designed to grow out softly, while others require more frequent appointments to maintain a particular finish. During your consultation, ask which category your choice falls into and what maintenance is likely to involve. Knowing this before colouring can help you select a look that fits your time and budget.`,
        `If you notice unwanted warmth, fading or unevenness, describe it clearly to the salon. Photos taken in consistent natural light can help communicate the concern. Avoid judging colour entirely under strongly coloured indoor lighting, where the apparent tone may differ. An honest assessment may lead to a simple adjustment, a longer-term plan or a recommendation to leave the hair alone for a period.`
      ]},
      { id: 'maintenance', heading: 'Plan your next appointment deliberately', paragraphs: [
        `Maintenance should support your life rather than dictate it. Ask your stylist what signs indicate it may be time for a refresh and whether your look offers flexibility between visits. Consider the practicalities: appointment duration, cost, travel and how you prefer your colour to look as it grows. A plan that acknowledges these details is more helpful than a generic calendar rule.`,
        `Keep a note of the colour service you received and any products or techniques that caused sensitivity. This history can make future consultations clearer. If you visit another salon, sharing accurate treatment information is especially useful. Transparency about previous processing helps professionals discuss realistic options without guesswork.`
      ]},
      { id: 'closing', heading: 'Keep the routine simple and personal', paragraphs: [
        `Caring for coloured hair is not a competition to collect the most products. Begin with gentle handling, suitable cleansing, appropriate conditioning and a clear understanding of your chosen look. Adjust based on your hair rather than every new trend you see. Where professional help is needed, ask questions early instead of trying repeated corrections on your own.`,
        `If you are planning your first colour service or a different technique, start with a consultation. Explore our colour service page for the questions worth asking and use the contact page to share your goals. Thoughtful aftercare is not about preserving one salon-day photograph forever. It is about building an everyday routine that helps your chosen colour continue to feel like you.`
      ]}
    ],
    faqs: [
      { question: 'How soon should I wash after colouring?', answer: 'Follow the specific guidance given for your colour service; timing varies by technique and product.' },
      { question: 'Do I need special products?', answer: 'Ask about products compatible with your hair, scalp preferences and colour technique before purchasing.' }
    ]
  },
  {
    slug: 'grooming-essentials-for-everyone',
    title: 'Everyday Grooming Essentials for Everyone',
    description: 'Build a simple personal-care routine around comfort, consistency and your individual style.',
    category: 'Everyday Rituals',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b',
    imageAlt: 'Understated everyday personal care products',
    author: 'Salon Editorial Team',
    publishedAt: null, updatedAt: null,
    sections: [
      { id: 'individual', heading: 'Grooming is personal, not a fixed set of rules', paragraphs: [
        `Good grooming does not need a complicated routine, a particular aesthetic or a collection of expensive products. It begins with a simple question: what helps you feel comfortable and prepared for your day? For some people, the answer involves a neatly maintained haircut. For others, it means an easy cleansing routine, a preferred facial hair shape or a few minutes of styling before leaving home. None of these choices belongs to a particular gender. Personal care should make room for individual expression rather than pressure everyone toward the same appearance.`,
        `A practical routine is one you can repeat without resentment. Think about the time you have, the environment you live in, your hair texture and the products you actually enjoy using. A beautiful ten-step routine may be less useful than three reliable habits. Start with essentials, notice what works and only add complexity when it answers a genuine need.`
      ]},
      { id: 'haircut', heading: 'Choose a haircut that works beyond the salon', paragraphs: [
        `A haircut can look excellent immediately after professional styling and still be difficult to manage the next morning. During your appointment, talk about the effort you are willing to invest at home. Do you use a dryer? Do you prefer to air dry? Would you rather avoid heavy finishing products? Your stylist can use that information to discuss shape and maintenance with you. The aim is not to avoid ambitious styles, but to understand what they ask of your everyday routine.`,
        `Keep a few reference photographs that show the qualities you like, such as movement, length or texture. Treat them as conversation starters, not identical instructions. Hair behaves differently across individuals, and an adaptable approach often produces a more satisfying personal result. Ask how the haircut may change as it grows and when you might want to revisit it.`
      ]},
      { id: 'cleansing', heading: 'Build a comfortable hair-cleansing habit', paragraphs: [
        `Scalp comfort and hair manageability are more useful guides than an arbitrary rule about how often everyone should wash. Your routine may depend on activity, climate, hair texture, product use and sensitivity. Choose a cleanser suitable for your needs, follow its instructions and rinse carefully. If a product makes your scalp uncomfortable, do not assume that the sensation means it is working. Stop using it and seek appropriate advice if irritation persists.`,
        `Conditioning may also be useful, particularly where hair tangles or feels difficult to manage. Apply products as directed and pay attention to the result. You do not need to purchase every formulation in a collection. Start with a simple combination and build slowly if you discover a specific need that is not being met.`
      ]},
      { id: 'face', heading: 'Approach facial hair and shaving thoughtfully', paragraphs: [
        `Facial hair can be part of personal style, practical maintenance or something you prefer not to emphasise at all. If you choose to trim or shave, keep tools clean, follow their instructions and avoid rushing over irritated skin. The preferred finish may be sharply defined, softly maintained or completely natural. No single approach is more professional or expressive than another.`,
        `When selecting grooming products, focus on comfort and suitability rather than marketing promises. Fragrances and ingredients can feel different on different skin types. If you frequently experience significant irritation, consider speaking with a qualified healthcare professional rather than treating the issue through trial and error. A salon can discuss cosmetic techniques, but it should not replace medical evaluation.`
      ]},
      { id: 'tools', heading: 'Use fewer, more purposeful tools', paragraphs: [
        `A comb or brush that suits your hair, clean trimming tools where relevant and a styling product that serves a clear purpose may be enough. The right selection depends on your preferences, not a universal shopping checklist. Ask your stylist to demonstrate how a tool is intended to be used, especially when you are trying a new finish. Learning a comfortable technique can be more valuable than adding another item to a crowded shelf.`,
        `Store tools according to manufacturer instructions and clean them regularly. Replace damaged or worn items when appropriate. Heat tools deserve particular attention: use them as directed, avoid contact with skin and consider whether lower-heat or non-heated techniques can meet your goals. The simplest improvement is often a calmer, more deliberate routine rather than a newer device.`
      ]},
      { id: 'occasion', heading: 'Adapt the routine for different occasions', paragraphs: [
        `Your everyday routine does not have to deliver the exact finish you want for an event. A celebration, interview or photo session may call for additional time, a new shape or professional styling. Plan ahead and communicate the setting, preferred look and any practical limitations. If you expect outdoor conditions or an extended event, mention them so the stylist can discuss suitable finishing choices.`,
        `Avoid last-minute experimentation with unfamiliar chemical services immediately before an important occasion. A consultation in advance creates room for realistic planning and helps you understand the time involved. If you are booking several services together, communicate that clearly so the appointment can be assessed properly.`
      ]},
      { id: 'budget', heading: 'Spend intentionally rather than automatically', paragraphs: [
        `Premium care is not defined by how many products you own. Before purchasing anything, ask what the product is supposed to do, whether it matches your routine and how you will know if it helps. Consider the ongoing cost as well as the initial price. A product that is expensive but rarely used offers little practical value, while a simple, suitable item may become a reliable part of your day.`,
        `The same thinking applies to salon services. Ask about pricing, maintenance intervals and what the result will require from you. You can choose an uncomplicated look and still value quality, craft and a considered guest experience. Intentional decisions tend to create a routine that is easier to maintain.`
      ]},
      { id: 'ritual', heading: 'Make room for a routine that feels like yours', paragraphs: [
        `Personal grooming should be a source of comfort and agency, not a list of obligations. Revisit your routine as your preferences, schedule and hair change. It is entirely reasonable to keep the things that work and let go of the rest. A welcoming salon can help by listening carefully, explaining alternatives and making space for choices that feel authentic.`,
        `Begin with one manageable improvement: a clearer styling plan, a gentler product choice or a better understanding of how your haircut behaves at home. If you would like tailored cosmetic guidance, explore our salon services or send an enquiry describing your goals. Everyday care can be simple, enjoyable and individual. You do not have to fit a template to feel well cared for.`
      ]}
    ],
    faqs: [
      { question: 'How many products do I need?', answer: 'Start with essentials that serve a clear purpose and add products only when they suit your routine.' },
      { question: 'Is there one grooming routine for everyone?', answer: 'No. Your preferences, texture, comfort and available time should guide your choices.' }
    ]
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string): BlogPost[] {
  return posts.filter((post) => post.slug !== slug).slice(0, 2);
}

export function getPostWordCount(post: BlogPost): number {
  return post.sections.flatMap((s) => [s.heading, ...s.paragraphs])
    .join(' ').trim().split(/\s+/).filter(Boolean).length;
}

export function getReadingTimeMinutes(post: BlogPost): number {
  return Math.max(1, Math.ceil(getPostWordCount(post) / 220));
}
