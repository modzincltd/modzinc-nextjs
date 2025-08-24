import { sanityClient } from './sanity'

// Project queries
export const getAllProjects = async () => {
  const query = `*[_type == "project"] | order(order asc) {
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
  }`
  
  return await sanityClient.fetch(query)
}

export const getFeaturedProjects = async () => {
  const query = `*[_type == "project" && featured == true] | order(order asc) {
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
  }`
  
  return await sanityClient.fetch(query)
}

export const getProjectBySlug = async (slug: string) => {
  const query = `*[_type == "project" && slug.current == $slug][0] {
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
    order,
    publishedAt
  }`
  
  return await sanityClient.fetch(query, { slug })
}

// Service queries
export const getAllServices = async () => {
  const query = `*[_type == "service" && active == true] | order(order asc) {
    _id,
    title,
    description,
    icon,
    features,
    technologies,
    order,
    active
  }`
  
  return await sanityClient.fetch(query)
}

// Testimonial queries
export const getAllTestimonials = async () => {
  const query = `*[_type == "testimonial"] | order(order asc) {
    _id,
    clientName,
    clientCompany,
    clientImage,
    content,
    rating,
    project->{title, slug},
    featured,
    order
  }`
  
  return await sanityClient.fetch(query)
}

export const getFeaturedTestimonials = async () => {
  const query = `*[_type == "testimonial" && featured == true] | order(order asc) {
    _id,
    clientName,
    clientCompany,
    clientImage,
    content,
    rating,
    project->{title, slug},
    featured,
    order
  }`
  
  return await sanityClient.fetch(query)
}

// Client queries
export const getAllClients = async () => {
  const query = `*[_type == "client" && active == true] | order(order asc) {
    _id,
    name,
    logo,
    website,
    description,
    featured,
    order,
    active
  }`
  
  return await sanityClient.fetch(query)
}

export const getFeaturedClients = async () => {
  const query = `*[_type == "client" && active == true && featured == true] | order(order asc) {
    _id,
    name,
    logo,
    website,
    description,
    featured,
    order,
    active
  }`
  
  return await sanityClient.fetch(query)
}


