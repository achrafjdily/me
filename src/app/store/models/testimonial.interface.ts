export interface Testimonial {
  content : string,
  author : {
    name : string,
    role : string
  }
}

export const testimonials : Testimonial[] = [
  {
    content : 'I am thrilled to recommend my exceptional friend and colleague Achraf for his outstanding skills and work ethic in software development. Throughout our time together at Promy.fr, he consistently demonstrated a remarkable ability to pay attention to details while crafting innovative and efficient solutions. His dedication and intelligence made him an invaluable asset to the team, and I have no doubt that he will continue to achieve great success in his future endeavors.',
    author : {
      name : 'Mouad ZIANI',
      role : 'Senior Software Engineer'
    }
  },
  {
    content : "I have had the pleasure of working with Achraf for many times, and I have been consistently impressed with their skills and work ethic. He is a highly skilled web developer with a deep understanding of the latest technologies. He is also a great team player who is always willing to help out their colleagues. I highly recommend him for any web development position. He is a talented developer and a great asset to any team.",
    author : {
      name : 'Mahdi Mouttahid',
      role : 'Web Developer'
    }
  },
]
