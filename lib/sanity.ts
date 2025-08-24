import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: '2024-01-01',
  useCdn: process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true',
}

export const sanityClient = createClient(config)

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ Queries
export const queries = {
  // Projects
  projects: `*[_type == "project"] | order(order asc, publishedAt desc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies,
    client,
    projectUrl,
    githubUrl,
    featured,
    order,
    publishedAt
  }`,
  
  featuredProjects: `*[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    technologies,
    client,
    projectUrl,
    featured,
    order
  }`,
  
  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    mainImage,
    images,
    technologies,
    client,
    projectUrl,
    githubUrl,
    featured,
    publishedAt
  }`,
  
  // Testimonials
  testimonials: `*[_type == "testimonial"] | order(order asc, _createdAt desc) {
    _id,
    clientName,
    clientCompany,
    clientImage,
    content,
    rating,
    featured,
    order
  }`,
  
  featuredTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    clientName,
    clientCompany,
    clientImage,
    content,
    rating,
    featured
  }`,
  
  // Clients
  clients: `*[_type == "client"] | order(order asc) {
    _id,
    name,
    company,
    logo,
    logoWhite,
    industry,
    location,
    website,
    description,
    services,
    featured,
    order
  }`,
  
  featuredClients: `*[_type == "client" && featured == true] | order(order asc) {
    _id,
    name,
    company,
    logo,
    logoWhite,
    industry,
    location,
    website,
    description,
    services,
    featured
  }`,
  
  // Services
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features,
    featured,
    order
  }`,
  
  // Pages
  pages: `*[_type == "page"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    metaDescription,
    heroSection,
    content,
    seo,
    publishedAt
  }`,
  
  pageBySlug: `*[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    metaDescription,
    heroSection,
    content,
    seo,
    publishedAt
  }`,
  
  // Blog Posts
  blogPosts: `*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    categories,
    tags,
    featured,
    publishedAt
  }`,
  
  featuredBlogPosts: `*[_type == "blogPost" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    categories,
    featured,
    publishedAt
  }`,
  
  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    author,
    mainImage,
    categories,
    tags,
    content,
    seo,
    publishedAt
  }`,
  
  // Site Settings (you can add this later)
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    contactInfo,
    socialLinks
  }`
}

