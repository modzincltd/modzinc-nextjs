# Sanity CMS Setup for ModZinc Portfolio

## Initial Setup

1. **Create a Sanity Project**
   ```bash
   npx sanity@latest init
   ```
   - Choose "Create new project"
   - Name it "modzinc-portfolio" or similar
   - Choose "Clean project with no predefined schemas"
   - Select your preferred dataset (production)

2. **Configure Environment Variables**
   Create a `.env.local` file in your project root:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

3. **Get Your Project ID**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Select your project
   - Copy the Project ID from the project settings

4. **Get API Token (Optional)**
   - In your Sanity project dashboard
   - Go to API section
   - Create a new token with appropriate permissions

## Available Content Types

### Projects
- Title, description, images
- Technologies used
- Client information
- Project URLs (live site, GitHub)
- Featured flag and display order

### Services
- Service title and description
- Icon name
- Features list
- Technologies used
- Active/inactive status

### Testimonials
- Client name and company
- Client image
- Testimonial content
- Rating (1-5 stars)
- Related project reference
- Featured flag

### Clients
- Client name and logo
- Website URL
- Description
- Featured flag and display order

## Usage

### Access Sanity Studio
```bash
npm run studio
```
Then visit: http://localhost:3333/studio

### Deploy Studio (Optional)
```bash
npm run sanity:deploy
```

### Fetch Data in Components
```typescript
import { getAllProjects, getFeaturedProjects } from '@/lib/queries'

// In your component
const projects = await getAllProjects()
const featuredProjects = await getFeaturedProjects()
```

## Next Steps

1. Add your first projects, services, and testimonials through the Sanity Studio
2. Update your components to use Sanity data instead of hardcoded content
3. Add image optimization using the `urlFor` function from `lib/sanity.ts`
4. Consider adding more content types as needed (blog posts, team members, etc.)

## Useful Queries

The `lib/queries.ts` file contains pre-built queries for:
- Getting all projects (ordered by display order)
- Getting featured projects only
- Getting projects by slug
- Getting all services
- Getting all testimonials
- Getting featured testimonials
- Getting all clients
- Getting featured clients

## Image Handling

Use the `urlFor` function to optimize images:
```typescript
import { urlFor } from '@/lib/sanity'

// In your component
<Image 
  src={urlFor(project.mainImage).url()} 
  alt={project.title}
  width={600}
  height={400}
/>
```


