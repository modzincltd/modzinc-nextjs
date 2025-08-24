# Sanity CMS Setup Guide

## Overview
This project uses Sanity CMS for content management, including portfolio projects, client testimonials, blog posts, and additional pages.

## Setup Instructions

### 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project
3. Note down your Project ID

### 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token

# Optional: For development
NEXT_PUBLIC_SANITY_USE_CDN=false
```

### 3. Get Your API Token

1. Go to your Sanity project dashboard
2. Navigate to API section
3. Create a new token with read permissions
4. Add it to your `.env.local` file

### 4. Install Dependencies

The required dependencies are already installed:
- `@sanity/client`
- `@sanity/image-url`
- `@sanity/vision`
- `next-sanity`

### 5. Access Sanity Studio

Once your environment variables are set up, you can access the Sanity Studio at:
```
http://localhost:3000/studio
```

## Content Types

### Projects
- **Title**: Project name
- **Slug**: URL-friendly identifier
- **Description**: Project overview
- **Main Image**: Featured project image
- **Additional Images**: Gallery of project screenshots
- **Technologies**: Array of technologies used
- **Client**: Client name
- **Project URL**: Live project link
- **GitHub URL**: Source code link
- **Featured**: Mark as featured project
- **Order**: Display order

### Testimonials
- **Client Name**: Customer name
- **Client Company**: Company name
- **Client Image**: Customer photo
- **Content**: Testimonial text
- **Rating**: 1-5 star rating
- **Related Project**: Link to associated project
- **Featured**: Mark as featured testimonial
- **Order**: Display order

### Clients
- **Name**: Client name
- **Company**: Company name
- **Logo**: Company logo (regular and white versions)
- **Industry**: Business industry
- **Location**: Geographic location
- **Website**: Company website
- **Description**: Client description
- **Services**: Array of services provided
- **Featured**: Mark as featured client
- **Order**: Display order
- **Testimonials**: Related testimonials
- **Projects**: Related projects

### Pages
- **Title**: Page title
- **Slug**: URL-friendly identifier
- **Meta Description**: SEO description
- **Hero Section**: Hero content with heading, subheading, background image, and CTA
- **Content**: Rich text content with images and custom blocks
- **SEO Settings**: SEO title, description, keywords, and Open Graph image

### Blog Posts
- **Title**: Post title
- **Slug**: URL-friendly identifier
- **Excerpt**: Short description
- **Author**: Post author
- **Main Image**: Featured image
- **Categories**: Post categories
- **Tags**: Post tags
- **Content**: Rich text content with images and code blocks
- **Featured**: Mark as featured post
- **SEO Settings**: SEO optimization
- **Published At**: Publication date

### Services
- **Title**: Service name
- **Description**: Service description
- **Icon**: Service icon
- **Features**: Array of service features
- **Featured**: Mark as featured service
- **Order**: Display order

## Usage Examples

### Fetching Projects
```typescript
import { sanityClient, queries } from '@/lib/sanity'

// Get all projects
const projects = await sanityClient.fetch(queries.projects)

// Get featured projects
const featuredProjects = await sanityClient.fetch(queries.featuredProjects)

// Get project by slug
const project = await sanityClient.fetch(queries.projectBySlug, { slug: 'project-slug' })
```

### Fetching Testimonials
```typescript
// Get all testimonials
const testimonials = await sanityClient.fetch(queries.testimonials)

// Get featured testimonials
const featuredTestimonials = await sanityClient.fetch(queries.featuredTestimonials)
```

### Fetching Clients
```typescript
// Get all clients
const clients = await sanityClient.fetch(queries.clients)

// Get featured clients
const featuredClients = await sanityClient.fetch(queries.featuredClients)
```

### Fetching Blog Posts
```typescript
// Get all blog posts
const blogPosts = await sanityClient.fetch(queries.blogPosts)

// Get featured blog posts
const featuredBlogPosts = await sanityClient.fetch(queries.featuredBlogPosts)

// Get blog post by slug
const blogPost = await sanityClient.fetch(queries.blogPostBySlug, { slug: 'post-slug' })
```

### Fetching Pages
```typescript
// Get all pages
const pages = await sanityClient.fetch(queries.pages)

// Get page by slug
const page = await sanityClient.fetch(queries.pageBySlug, { slug: 'page-slug' })
```

## Image Handling

Use the `urlFor` function to generate optimized image URLs:

```typescript
import { urlFor } from '@/lib/sanity'

// Generate image URL
const imageUrl = urlFor(image).width(800).height(600).url()
```

## Development Workflow

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

2. **Access Sanity Studio**:
   ```
   http://localhost:3000/studio
   ```

3. **Create Content**: Use the studio to create and manage your content

4. **Fetch Content**: Use the provided queries to fetch content in your components

## Deployment

1. **Environment Variables**: Make sure to set up environment variables in your deployment platform
2. **Build**: The Sanity Studio will be included in your build
3. **Access**: Studio will be available at `/studio` on your deployed site

## Tips

- Use the Vision tool in Sanity Studio to test GROQ queries
- Set up webhooks for real-time content updates
- Use the `featured` field to highlight important content
- Use the `order` field to control content display order
- Leverage the SEO fields for better search engine optimization


