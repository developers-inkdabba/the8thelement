'use client'

import { type PointerEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    quote: "I returned to my pre-pregnancy weight in just 4 months - sustainably, without crash dieting. Srividya understood what my body needed at this stage of life and built a plan that actually worked.",
    name: "Ishwarya R.",
    program: "MenoThrive",
  },
  {
    quote: "I dropped dress sizes and my eating habits are completely transformed. The Track 2 Transform tool kept me honest even on hard days, helping me build permanent consistency.",
    name: "Akshaya S.",
    program: "Transform & Thrive",
  },
  {
    quote: "The hot flashes and night sweats were running my life. Srividya's focus on sleep architecture and targeted midlife nutrition gave me my metabolic freedom back.",
    name: "Meera K.",
    program: "MenoThrive",
  },
  {
    quote: "As a Type 2 diabetic, Srividya's approach addressed my insulin resistance, built my strength, and helped me finally understand why my previous efforts weren't working. My HbA1c has improved significantly.",
    name: "Lakshmi S.",
    program: "MenoThrive",
  },
  {
    quote: "My GI issues came down drastically within 6-8 weeks. The elimination diet process was incredibly methodical, patient, and highly personalized. Truly science-backed.",
    name: "Kavitha J.",
    program: "Transform & Thrive",
  },
  {
    quote: "I was so tired of standard restrictive diets that slowed down my metabolism. Srividya's custom hormonal balancing approach helped me shed 8kg and feel strong.",
    name: "Sujata V.",
    program: "Transform & Thrive",
  },
  {
    quote: "This past six months have been a truly interesting, revolting, and positive experience. I learned so much about myself, my habits, how I want to live my life, and how I can regulate and take control over what I have.",
    name: "Sharmila",
    program: "Client Letter",
  },
  {
    quote: "I lost a lot of inches, but the weight remained the same. I kept continuing with the practices and after so many years, I have come below 60 kgs and weighing at 57 at the moment.",
    name: "Client Win",
    program: "Transform & Thrive",
  },
  {
    quote: "Hemoglobin improved from 12 to 13.5, I am sleeping better, building strength, and able to squat without knee pain. My posture greatly improved too.",
    name: "Client Win",
    program: "Health Milestones",
  },
  {
    quote: "Two magical words I learnt from you - mindfulness and habit transformation. Being mindful about what you eat and your movement, and also being consistent, is really important.",
    name: "Client Win",
    program: "Habit Transformation",
  },
  {
    quote: "I am fitting into my wedding blouse from 2004 without any alterations. Weight loss - 5kgs. Overall measurements loss - 35cms.",
    name: "Client Win",
    program: "Scale Victory",
  },
  {
    quote: "I was not sure if this would be sustainable or if I would really be able to lose weight I had put on after pregnancy and never lost for over 12 years. Srividya's balanced and realistic approach made it possible.",
    name: "Client Win",
    program: "Post-Pregnancy Reset",
  },
  {
    quote: "I have developed a healthier relationship with food, movement, and my body. I feel stronger, more confident, and more in control of my health.",
    name: "Client Win",
    program: "Lifestyle Coaching",
  },
  {
    quote: "Amazing energy levels. I feel active and on my toes all day managing my household chores and music lessons without any energy dips.",
    name: "Hema",
    program: "Program Wins",
  },
  {
    quote: "I have learnt what to eat, when to eat, how much to eat, how to eat, and why I eat. I have no fear of food anymore and know how to handle hunger with ease.",
    name: "Hema",
    program: "Food Freedom",
  },
  {
    quote: "I am a transformed person inside out with a lot of self-reflections that this program offers. A fit and healthy body reflects so well on our mind and our approach towards problems.",
    name: "Hema",
    program: "Mindset Shift",
  },
  {
    quote: "I was very low due to overweight, leg pain, neck pain, and knee pain. For the first time, I met you at Bessie for strength training and blindly joined the 6 month program.",
    name: "Ramya",
    program: "Strength Training",
  },
  {
    quote: "Loved the way you started the program. Whenever a habit is introduced, you clearly explain all the reasons, benefits, and the habit in a way that is slowly drilled into our mind.",
    name: "Ramya",
    program: "6 Month Program",
  },
  {
    quote: "I joined The 8th Element to improve my health in more ways than one and it felt wonderful to connect with Sri to take on this journey under her guidance.",
    name: "Sangeetha Satish",
    program: "The 8th Element",
  },
  {
    quote: "My weight had been oscillating for the last couple of years. At the end of the program, I am 7.5kgs lighter and have lost 30 inches from all over my body.",
    name: "Sangeetha Satish",
    program: "Transformation",
  },
  {
    quote: "I love that the program does not exclude any food group, but focuses on portion control, which is a great lifestyle tool that can be sustained all through my life.",
    name: "Sangeetha Satish",
    program: "Sustainable Habits",
  },
  {
    quote: "After joining the program and working with Coach Srividya, I am mindful about my eating choices and eating healthy consistently. I dropped down from 95kgs to 77kgs.",
    name: "Client Win",
    program: "Weight Loss Journey",
  },
  {
    quote: "I walk everyday for more than an hour and have been consistent for the last 8 months. I feel very light, active, and energetic.",
    name: "Client Win",
    program: "Consistency",
  },
  {
    quote: "My whole perception on food and eating habits has changed after the program, along with my mindset and behaviour. My family's positive changes also helped me handle things at home.",
    name: "Client Win",
    program: "Mindset & Beliefs",
  },
  {
    quote: "I eat whatever I want now because emotional eating is under control and snacking has completely vanished. I now enjoy every bite and enabled myself to control my eating portions.",
    name: "Client Win",
    program: "Food Awareness",
  },
  {
    quote: "It was solely because of her guidance that I was able to undergo this transformation. It was the longest I have ever stuck to a plan, and her help made it possible.",
    name: "Client Win",
    program: "Transformation",
  },
  {
    quote: "The guidelines were easy to remember, and as the food and exercise habits were built one by one, they came naturally. The constant fine-tuning helped with having and sticking to balanced meals.",
    name: "Client Win",
    program: "Balanced Meals",
  },
  {
    quote: "Exercising and knowing I was making the right food choices put me in a good mood and made me feel better about myself. I was able to run my debut marathon as a result.",
    name: "Client Win",
    program: "Fitness Confidence",
  },
  {
    quote: "You are a professional. You are resourceful, open to criticism, and you never judged me when I expressed my deepest fears.",
    name: "Client Feedback",
    program: "Coaching Skills",
  },
  {
    quote: "What resonated with me most was that everything you suggested was easy to work on. One word: wow. I found this program realistic, relatable, and doable.",
    name: "Mythily",
    program: "Program Approach",
  },
  {
    quote: "What impressed me most was the empathy you had for me. Never did I feel like a failure or a weak person. Your appreciation of every small win made me feel I can do this.",
    name: "Krithiga",
    program: "MenoThrive",
  },
  {
    quote: "The idea that I do not have to be perfect in every effort, but just show up imperfectly and consistently with tiny habits, has been a game-changer.",
    name: "Krithiga",
    program: "MenoThrive",
  },
  {
    quote: "You taught me to be compassionate to myself and I am a much happier person. The best thing is you coached me without forcing me to do things.",
    name: "Client Feedback",
    program: "Client Feedback",
  },
  {
    quote: "Your kindness is one attribute I love. Your unique ability is your empathy and non-judgemental approach. The accountability helped me lose some of my inhibitions.",
    name: "Client Feedback",
    program: "Coaching Skills",
  },
  {
    quote: "The design of the program is amazing. It is holistic and helped me work on my lifestyle while managing a toddler and work. Small actions made a big difference.",
    name: "Client Feedback",
    program: "Program Structure",
  },
  {
    quote: "You are an awesome coach and also my inspiration. You were focused not just on body transformation, but also emphasized mental health, which plays a vital role in life.",
    name: "Client Feedback",
    program: "Holistic Coaching",
  },
  {
    quote: "Before your program I had low energy, high stress, binge eating, and reacted to emotions without thinking. After your program I have high energy, a healthy relationship with food, and feel great about my body.",
    name: "Client Feedback",
    program: "Lifestyle Reset",
  },
  {
    quote: "The feeling of having a personal cheerleader by my side stood out most. The focus was always on improvement and tackling challenges together, rather than dwelling on negatives.",
    name: "Aishwarya",
    program: "Coaching Skills",
  },
  {
    quote: "The structure was well-paced and aligned with my personal goals, especially considering my hypothyroidism. Sustainable living rather than restrictive dieting was a game-changer.",
    name: "Aishwarya",
    program: "Program Approach",
  },
  {
    quote: "The program was tailored to my life, not a one-size-fits-all plan. I never felt judged, only understood and supported. The accountability kept me honest and motivated.",
    name: "Uma",
    program: "Personalized Coaching",
  },
  {
    quote: "The program taught me to change my relationship with food and my body, emphasizing mindful eating and satisfaction without guilt. It was about becoming a healthier, happier version of myself.",
    name: "Sujatha",
    program: "MenoThrive",
  },
  {
    quote: "The non-judgemental, compassionate approach allowed me to navigate my challenges at my own pace. Celebrating even the smallest wins and constant support made a world of difference.",
    name: "Kavitha",
    program: "MenoThrive",
  },
  {
    quote: "Learning to enjoy my favorite foods without overindulging, and embracing balanced meals, fundamentally shifted my perspective. The mantra of showing up imperfectly resonated deeply.",
    name: "Kavitha",
    program: "MenoThrive",
  },
  {
    quote: "Loved your non-judgemental approach. The approach was never about forcing changes, but gently guiding me through each step with understanding and patience.",
    name: "Sujatha",
    program: "MenoThrive",
  },
  {
    quote: "My life was all about cooking, driving to work in peak traffic, eating at odd times, and getting home too fatigued. Your program brought me so much relief.",
    name: "Usha Kumar",
    program: "Client Feedback",
  },
  {
    quote: "I have learnt to be mindful, stay consistent with my workouts and walks, have better nutrition awareness, and know how to plate my meal and eat slowly.",
    name: "Usha Kumar",
    program: "Nutrition Awareness",
  },
  {
    quote: "You are the best thing that happened to me in a long time. You were always available when I needed you, and your biggest strength is helping us become independent.",
    name: "Dr. Priya",
    program: "Coaching Feedback",
  },
  {
    quote: "Your coaching is personalized, brings results, and delivers. Your patience and support are top-notch, and all the practices and skills are spot on.",
    name: "Dr. Priya",
    program: "Coaching Feedback",
  },
  {
    quote: "The program is good and different with many strategies and skills. The approach is doable with 5-minute actions to change habits.",
    name: "Client Feedback",
    program: "Habit Skills",
  },
  {
    quote: "This program is not just for 6 months or 1 year. It is for life. I will enjoy and cherish what I learned throughout my life.",
    name: "Client Voice",
    program: "Lifelong Change",
  },
  {
    quote: "There were no crash diets. Every meal helped us understand our relationship with food, and Srividya guided us from day one.",
    name: "Client Voice",
    program: "Food Relationship",
  },
  {
    quote: "It was not a one-size-fits-all diet plan. It was a structured habit formation program that helped us understand nutrition, exercise, and how to plan our own routine.",
    name: "Client Voice",
    program: "Habit Formation",
  },
  {
    quote: "Mindfulness in eating and in general has become a habit. I learned to be more self-compassionate, let go of perfection, and show up imperfectly.",
    name: "Client Voice",
    program: "Mindfulness",
  },
  {
    quote: "The program helped us build habits slowly, one by one. The skills were practical, doable, scalable, and flexible enough for individual needs.",
    name: "Client Voice",
    program: "Practical Skills",
  },
  {
    quote: "It helped me become more self-aware and self-compassionate, and helped me course correct whenever I was floundering.",
    name: "Client Voice",
    program: "Self Awareness",
  },
  {
    quote: "Now I am more aware of what I put into my body. I understand my meal plate for satisfaction as well as nutrition, and I am kinder to myself.",
    name: "Client Voice",
    program: "Nutrition Awareness",
  },
  {
    quote: "My aha moment was realizing that small progress counts, strict diets do not help, and consistency, strategy, and protein matter.",
    name: "Client Voice",
    program: "Aha Moment",
  },
  {
    quote: "Srividya's way of coaching is very practical. Her strategies feel acceptable, doable, and they work.",
    name: "Client Voice",
    program: "Coaching Approach",
  },
  {
    quote: "You can rely on Coach Srividya and invest in your health so you can change your relationship with food and overall wellbeing.",
    name: "Client Voice",
    program: "Health Investment",
  },
  {
    quote: "Srividya's simple strategies started with mindset shifts and helped improve my relationship with food, mental wellbeing, and emotional wellbeing.",
    name: "Client Voice",
    program: "Mindset Shift",
  },
  {
    quote: "You ask better questions that help us understand what we are going through and what we need to work on. Your non-judgmental platform made sharing our challenges easier.",
    name: "Client Voice",
    program: "Coaching Skills",
  },
  {
    quote: "This is a one-time investment in your life. The skills you learn travel with you, and group accountability helps you stay consistent.",
    name: "Client Voice",
    program: "Group Accountability",
  },
  {
    quote: "I was able to balance my meal and stop bingeing while eating out. I could enjoy one gulab jamun slowly, and Srividya's strategies made it possible.",
    name: "Client Voice",
    program: "Food Freedom",
  },
  {
    quote: "The structure was very effective. We took one practice at a time, discussed challenges during calls, and the resources and videos were very helpful.",
    name: "Client Voice",
    program: "Program Structure",
  },
  {
    quote: "Group accountability, guidance, and support helped my movement consistency and new skills become habits.",
    name: "Client Voice",
    program: "Consistency",
  },
  {
    quote: "I really enjoyed my weekly calls, and the entire coaching experience was awesome.",
    name: "Client Voice",
    program: "Weekly Coaching",
  },
  {
    quote: "The motivation and handholding from you as a coach is the highlight of the program. Making small changes and showing up imperfectly resonated deeply with me.",
    name: "Client Voice",
    program: "Coach Support",
  },
  {
    quote: "The program is fantastic for anyone balancing health and wellbeing through a difficult time. It is scientific, simple, tailor-made, and paced at your pace.",
    name: "Client Voice",
    program: "Tailored Coaching",
  },
  {
    quote: "Your patient listening, practical solutions, empathy, compassion, and encouragement made me feel supported throughout.",
    name: "Client Voice",
    program: "Coach Feedback",
  },
  {
    quote: "Group accountability was super helpful. It felt lovely to have someone walk the journey with me and help every time I slipped back.",
    name: "Client Voice",
    program: "Group Support",
  },
  {
    quote: "Your tailor-made practical approach is doable for the individual instead of standardizing the program.",
    name: "Client Voice",
    program: "Personalized Coaching",
  },
  {
    quote: "Everything was excellent. The program was well structured, practices were comfortable, and meal plating and prepping ideas were really helpful.",
    name: "Client Voice",
    program: "Meal Planning",
  },
  {
    quote: "You were kind, patient, non-judgmental, and helped me be kinder to myself. I relied on you for mental strength through a tough situation.",
    name: "Client Voice",
    program: "Mental Strength",
  },
  {
    quote: "This program transformed me in consistency, mindfulness, and my relationship with food. I feel more energetic, confident, and able to prioritise myself.",
    name: "Client Voice",
    program: "Transformation",
  },
  {
    quote: "The group coaching program helped me come back on track. I have more energy, dropped a pant size, feel more confident, and pause before every meal.",
    name: "Client Voice",
    program: "Group Coaching",
  },
  {
    quote: "I learned the art of plating after joining The 8th Element. Group accountability helped, and I now enjoy the foods I love with more awareness.",
    name: "Client Voice",
    program: "Meal Plating",
  },
  {
    quote: "Friends and family noticed changes in my body composition, skin texture, and energy levels. I also built portion control and started trying new exercises.",
    name: "Client Voice",
    program: "Visible Progress",
  },
  {
    quote: "This was my second stint with Srividya during perimenopause. I learned mindful eating, self-compassion, and how to focus on energy, inch loss, and how clothes fit instead of only the scale.",
    name: "Client Voice",
    program: "Perimenopause Reset",
  },
]

const featuredTransformations = [
  {
    quote: "At 75, her transformation goes far beyond weight loss. She is stronger, lighter, more mobile, and confident in her body again.",
    name: "Bhuvana, 75",
    program: "MenoThrive",
    imageSrc: "/success-stories/Bhuvana.jpg",
    imageAlt: "Bhuvana's transformation at 75",
    result: "Lost 12 kg - stronger, mobile, and more independent",
    storyHref: "/success-stories#story-bhuvana-75-years-srividya-s-mom",
  },
  {
    quote: "Built strength, stability, and confidence while becoming more comfortable in her body and moving beyond all-or-nothing thinking.",
    name: "Uthra, 36",
    program: "MenoThrive",
    imageSrc: "/success-stories/Uthra.jpg",
    imageAlt: "Uthra's strength and confidence transformation",
    result: "Stronger movement - rebuilt self-trust and consistency",
    storyHref: "/success-stories#story-uthra",
  },
  {
    quote: "She found a sustainable rhythm through PCOS overwhelm and became consistent without needing an extreme plan.",
    name: "Nirupa Seshadri",
    program: "MenoThrive",
    imageSrc: "/success-stories/niupa.jpeg",
    imageAlt: "Nirupa Seshadri's PCOS transformation journey",
    result: "10+ kg lost - 118 cm reduced - Large to Small",
    storyHref: "/success-stories#story-nirupa-seshadri",
  },
  {
    quote: "Improved sleep, daily energy, and functioning while learning how to feel in control of her health again.",
    name: "Kriti, 40+",
    program: "MenoThrive",
    imageSrc: "/success-stories/Kriti.jpeg",
    imageAlt: "Kriti's health transformation journey",
    result: "Lost 5 kg and 60 cm - better energy and sleep",
    storyHref: "/success-stories#story-kriti",
  },
  {
    quote: "She rebuilt strength for dance and healed her relationship with food without guilt or restriction.",
    name: "Sharmila, 40+",
    program: "Perimenopause",
    imageSrc: "/success-stories/Sharmila.jpeg",
    imageAlt: "Sharmila's perimenopause transformation journey",
    result: "Lost 8 kg and 73 cm - reduced pain and felt lighter",
    storyHref: "/success-stories#story-sharmila",
  },
  {
    quote: "The feeling of having a personal cheerleader by my side stood out most. I never felt judged, only motivated.",
    name: "Aishwarya",
    program: "MenoThrive",
    imageSrc: "/success-stories/Aishwarya.jpg",
    imageAlt: "Aishwarya's transformation journey",
    result: "Post-pregnancy reset - stronger habits and confidence",
    storyHref: "/success-stories#story-aishwarya",
  },
  {
    quote: "With balanced meals, consistent workouts, daily meal tracking, and Track2Transform, I built habits that support my fitness journey.",
    name: "Ishwarya",
    program: "MenoThrive",
    imageSrc: "/success-stories/Ishwarya.jpg",
    imageAlt: "Ishwarya's post-pregnancy transformation",
    result: "Back to pre-pregnancy weight in 4 months",
    storyHref: "/success-stories#story-ishwarya",
  },
  {
    quote: "My relationship with food is healthier. I know why I reach for food and I no longer binge-eat.",
    name: "Lakshmi",
    program: "MenoThrive",
    imageSrc: "/success-stories/Lakshmi.jpg",
    imageAlt: "Lakshmi's health transformation",
    result: "Diabetes support - inches lost, energy gained",
    storyHref: "/success-stories#story-lakshmi",
  },
  {
    quote: "I dropped dress sizes, gained confidence and energy, improved my eating habits, and learned to handle cravings better.",
    name: "Akshaya",
    program: "Transform & Thrive",
    imageSrc: "/success-stories/Akshaya.jpg",
    imageAlt: "Akshaya's journey with Transform & Thrive",
    result: "Dropped dress sizes - transformed eating habits",
    storyHref: "/success-stories#story-akshaya",
  },
  {
    quote: "Her GI issues came down drastically within 6-8 weeks through a methodical and personalised process.",
    name: "Kavitha",
    program: "MenoThrive",
    imageSrc: "/success-stories/Kavitha.jpg",
    imageAlt: "Kavitha's GI health recovery",
    result: "GI relief - stronger food awareness and confidence",
    storyHref: "/success-stories#story-kavitha",
  },
  {
    quote: "A realistic routine helped her build visible body-composition change without an extreme approach.",
    name: "Dr. Poornima",
    program: "Transform & Thrive",
    imageSrc: "/success-stories/dr-poornima.jpg",
    imageAlt: "Dr. Poornima's body composition transformation",
    result: "Visible inch loss - better posture and confidence",
    storyHref: "/success-stories#story-dr-poornima",
  },
  {
    quote: "Small, repeatable habits helped her feel lighter, stand taller, and move with more confidence.",
    name: "Pavithra",
    program: "MenoThrive",
    imageSrc: "/success-stories/pavithra.jpg",
    imageAlt: "Pavithra's inch loss and confidence transformation",
    result: "Visible inch loss - stronger body confidence",
    storyHref: "/success-stories#story-pavithra",
  },
  {
    quote: "Her transformation shows up in the inches lost, the energy gained, and the way she carries herself.",
    name: "Sangeetha",
    program: "MenoThrive",
    imageSrc: "/success-stories/sangeetha.jpg",
    imageAlt: "Sangeetha's confidence and inch loss transformation",
    result: "Inch loss - brighter energy and confidence",
    storyHref: "/success-stories#story-sangeetha",
  },
  {
    quote: "As her habits changed, her life opened up again - with more energy for the things she loves.",
    name: "Sujatha Ravi",
    program: "Transform & Thrive",
    imageSrc: "/success-stories/sujatha-ravi.jpg",
    imageAlt: "Sujatha Ravi's lifestyle and confidence transformation",
    result: "Renewed energy - habits, joy, and self-expression",
    storyHref: "/success-stories#story-sujatha-ravi",
  },
  {
    quote: "Her after photo says what numbers often cannot: lighter, freer, and more comfortable in her body.",
    name: "Sujatha",
    program: "MenoThrive",
    imageSrc: "/success-stories/sujatha.jpg",
    imageAlt: "Sujatha's body confidence transformation",
    result: "Visible inch loss - playful body confidence",
    storyHref: "/success-stories#story-sujatha",
  },
  {
    quote: "A stronger routine helped her reconnect with confidence, style, and visible body-composition change.",
    name: "Swetha",
    program: "MenoThrive",
    imageSrc: "/success-stories/swetha.jpg",
    imageAlt: "Swetha's strength and style transformation",
    result: "Body composition - sharper confidence and style",
    storyHref: "/success-stories#story-swetha",
  },
  {
    quote: "She learned to manage stressful periods without abandoning progress and built a healthier, more compassionate mindset.",
    name: "Aritu",
    program: "MenoThrive",
    imageSrc: "/success-stories/Aritu.jpeg",
    imageAlt: "Aritu's perimenopause transformation",
    result: "10+ kg lost over 8 months - sustainable habits",
    storyHref: "/success-stories#story-aritu",
  },
]

const row1 = featuredTransformations.filter((_, index) => index % 2 === 0)
const row2 = featuredTransformations.filter((_, index) => index % 2 === 1)

function getTestimonialRating(index: number): 4 | 5 {
  return index % 5 === 2 || index % 7 === 4 ? 4 : 5
}

function slugifyName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const testimonialAnchorNames = Array.from(
  new Set([...testimonials.map((testimonial) => testimonial.name), ...featuredTransformations.map((testimonial) => testimonial.name), 'Sangeetha', 'Usha']),
)

// Duplicate lists to ensure seamless endless wrapping
const marqueeSet1 = [...row1, ...row1]
const marqueeRow1 = [...marqueeSet1, ...marqueeSet1, ...marqueeSet1]
const marqueeSet2 = [...row2, ...row2]
const marqueeRow2 = [...marqueeSet2, ...marqueeSet2, ...marqueeSet2]

type DraggableMarqueeRowProps = {
  direction: 'left' | 'right'
  children: ReactNode
}

function DraggableMarqueeRow({ direction, children }: DraggableMarqueeRowProps) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({ active: false, moved: false, pointerId: 0, startX: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const normalizeScrollPosition = () => {
    const viewport = viewportRef.current
    if (!viewport) return

    const setWidth = viewport.scrollWidth / 3
    if (!Number.isFinite(setWidth) || setWidth <= 0) return

    if (viewport.scrollLeft < setWidth * 0.5) {
      viewport.scrollLeft += setWidth
      dragRef.current.scrollLeft += setWidth
    }

    if (viewport.scrollLeft > setWidth * 1.5) {
      viewport.scrollLeft -= setWidth
      dragRef.current.scrollLeft -= setWidth
    }
  }

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport) return

    const setInitialScroll = () => {
      viewport.scrollLeft = viewport.scrollWidth / 3
    }

    setInitialScroll()
    window.addEventListener('resize', setInitialScroll)

    return () => window.removeEventListener('resize', setInitialScroll)
  }, [])

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return
    if (event.pointerType === 'mouse') event.preventDefault()

    const viewport = viewportRef.current
    if (!viewport) return

    normalizeScrollPosition()
    dragRef.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: viewport.scrollLeft,
    }
  }

  const drag = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport || !dragRef.current.active) return
    if (event.pointerType === 'mouse') event.preventDefault()

    const distance = event.clientX - dragRef.current.startX

    // Capture the pointer only once a real drag starts, so a plain click still reaches the link.
    if (!dragRef.current.moved) {
      if (Math.abs(distance) < 6) return
      dragRef.current.moved = true
      setIsDragging(true)
      viewport.setPointerCapture(dragRef.current.pointerId)
    }

    viewport.scrollLeft = dragRef.current.scrollLeft - distance
    normalizeScrollPosition()
  }

  const stopDrag = (event: PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current
    if (!viewport || !dragRef.current.active) return

    dragRef.current.active = false
    dragRef.current.moved = false
    setIsDragging(false)

    if (viewport.hasPointerCapture(event.pointerId)) {
      viewport.releasePointerCapture(event.pointerId)
    }
  }

  return (
    <div
      ref={viewportRef}
      className={`marquee-drag-viewport w-full overflow-hidden flex ${
        isDragging ? 'is-dragging cursor-grabbing' : 'cursor-grab'
      }`}
      onPointerDown={startDrag}
      onPointerMove={drag}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onPointerLeave={stopDrag}
      onScroll={normalizeScrollPosition}
      aria-label="Drag testimonials left or right"
    >
      <div
        className={`${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} gap-6 flex`}
        style={{ animationPlayState: isDragging ? 'paused' : undefined }}
      >
        {children}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-cream/10 relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gold/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      
      <div className="w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-8 sm:px-12 lg:px-20"
        >
          <h2
            id="testimonials-heading"
            className="text-section text-navy tracking-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Real Women. Real Results.
          </h2>
          <div className="w-16 h-0.5 bg-gold/50 mx-auto mt-6" />
        </motion.div>

        <div className="sr-only" aria-hidden="true">
          {testimonialAnchorNames.map((name) => (
            <span key={name} id={`testimonial-${slugifyName(name)}`} />
          ))}
        </div>

        {/* Marquee Rows Container */}
        <div className="relative flex flex-col gap-6 w-full overflow-hidden py-4">
          {/* Beautiful Edge Vignettes / Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-warm-bg via-warm-bg/70 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-warm-bg via-warm-bg/70 to-transparent pointer-events-none z-20" />

          {/* Row 1: Sliding Left */}
          <DraggableMarqueeRow direction="left">
            {marqueeRow1.map((t, idx) => (
              <div
                key={`r1-${t.name}-${idx}`}
                className="aspect-square w-[260px] sm:w-[300px] lg:w-[320px] shrink-0 px-2"
              >
                <TestimonialCard {...t} rating={getTestimonialRating(idx)} />
              </div>
            ))}
          </DraggableMarqueeRow>

          {/* Row 2: Sliding Right */}
          <DraggableMarqueeRow direction="right">
            {marqueeRow2.map((t, idx) => (
              <div
                key={`r2-${t.name}-${idx}`}
                className="aspect-square w-[260px] sm:w-[300px] lg:w-[320px] shrink-0 px-2"
              >
                <TestimonialCard {...t} rating={getTestimonialRating(idx + 2)} />
              </div>
            ))}
          </DraggableMarqueeRow>
        </div>
      </div>
    </section>
  )
}
