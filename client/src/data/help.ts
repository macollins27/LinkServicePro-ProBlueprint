export interface HelpArticle {
  slug: string;
  title: string;
  content: string;
}

export interface HelpCategory {
  id: string;
  name: string;
  icon: string;
  articles: HelpArticle[];
}

export const helpCategories: HelpCategory[] = [
  {
    id: "getting-started",
    name: "Getting Started",
    icon: "Rocket",
    articles: [
      {
        slug: "quick-start-guide",
        title: "Quick start guide",
        content: `# Quick start guide

Welcome to LinkServicePro! This guide will help you get up and running in under 30 minutes.

## Step 1: Complete your company profile

Navigate to **Settings → Company** and fill in:

- Company name and logo
- Business address
- Contact information
- License numbers (displayed on quotes and invoices)

## Step 2: Add your first team members

Go to **Team → Add Member** and invite:

- Dispatchers (full office access)
- Technicians (mobile app access)
- Admins (billing and settings access)

Each member receives an email invitation with login instructions.

## Step 3: Set up your service catalog

Define the services you offer under **Settings → Services**:

- Service name (e.g., "HVAC Maintenance")
- Default duration
- Base pricing
- Materials typically used

This speeds up quoting and scheduling later.

## Step 4: Configure your calendar

Set your business hours under **Schedule → Settings**:

- Operating days and hours
- Technician availability
- Buffer time between jobs
- Emergency on-call coverage

## Step 5: Create your first customer

Add a customer via **Customers → New Customer**:

- Contact details
- Service address
- Billing information
- Equipment/property notes

You can also import customers from a CSV file.

## Step 6: Schedule your first job

Click **Schedule → New Job** and:

1. Select the customer
2. Choose service type
3. Assign technician
4. Pick date and time
5. Add any special instructions

The technician will see it in their mobile app immediately.

## Step 7: Mobile app setup

Have technicians download the LinkServicePro mobile app:

- iOS: Search "LinkServicePro" in App Store
- Android: Search "LinkServicePro" in Play Store

They log in with the credentials from their invitation email.

## Next steps

- Set up payment processing (Settings → Payments)
- Customize invoice templates (Settings → Templates)
- Enable customer portal (Settings → Customer Portal)
- Integrate with QuickBooks or Xero (Integrations)

Need help? Contact support at support@linkservicepro.com or use the chat widget.`
      },
      {
        slug: "mobile-app-setup",
        title: "Mobile app setup for technicians",
        content: `# Mobile app setup for technicians

The LinkServicePro mobile app gives your field team everything they need to complete jobs efficiently.

## Installing the app

### iOS (iPhone/iPad)
1. Open the App Store
2. Search for "LinkServicePro"
3. Tap **Get** to download
4. Open the app once installed

### Android
1. Open the Google Play Store
2. Search for "LinkServicePro"
3. Tap **Install**
4. Open the app once installed

## First-time login

1. Tap **Sign In**
2. Enter the email address where you received your invitation
3. Enter the temporary password from the invitation email
4. You'll be prompted to create a new password
5. Enable notifications when prompted (recommended)

## Granting permissions

The app will request:

- **Location**: Required for GPS tracking and route optimization
- **Camera**: For taking job site photos and scanning barcodes
- **Notifications**: For job assignments and schedule updates

Tap **Allow** for each permission.

## Navigating the app

### Home screen
- Today's schedule
- Current job status
- Notifications badge

### Jobs tab
- All assigned jobs
- Filter by status (Scheduled, In Progress, Completed)
- Tap any job to view details

### Map tab
- See all job locations
- Tap a pin to navigate or view details
- Optimized route displayed

### Profile tab
- Your schedule
- Time tracking
- Settings

## Updating job status

1. Tap the job from your schedule
2. Tap **Start Job** when you arrive
3. Complete the work
4. Add photos, notes, or materials used
5. Tap **Complete Job**
6. Capture customer signature
7. Job automatically syncs to the office

## Offline mode

The app works without internet:

- Job details download automatically
- Changes sync when you reconnect
- Photos queue for upload

## Troubleshooting

**App won't log in:**
- Verify you're using the email from the invitation
- Reset password via "Forgot password" link
- Contact your dispatcher to resend the invitation

**GPS not working:**
- Check that Location is enabled in phone settings
- Ensure the app has "Always" location permission
- Restart the app

**Jobs not appearing:**
- Pull down on the job list to refresh
- Check your internet connection
- Verify with dispatch that jobs are assigned to you

## Tips for efficiency

- Enable Face ID or fingerprint login for faster access
- Turn on push notifications so you don't miss urgent jobs
- Take before/after photos to build customer trust
- Use voice-to-text for notes to save time

For technical support, contact your dispatcher or email support@linkservicepro.com.`
      },
      {
        slug: "importing-customer-data",
        title: "Importing customer data from spreadsheets",
        content: `# Importing customer data from spreadsheets

Migrating from spreadsheets or another system? Bulk import your customer list in minutes.

## Preparing your CSV file

### Required columns

Your spreadsheet must include these fields:

- **First Name**
- **Last Name**
- **Email** OR **Phone** (at least one)
- **Service Address**

### Optional columns

Include these for richer data:

- Company Name
- Billing Address (if different from service address)
- City, State, ZIP
- Phone 2 (alternate contact)
- Notes
- Tags (comma-separated)

### Formatting rules

- Save as CSV (Comma Separated Values)
- Use UTF-8 encoding
- One customer per row
- Column headers in the first row
- No special characters in column names

### Example CSV format

\`\`\`
First Name,Last Name,Email,Phone,Service Address,City,State,ZIP,Notes
John,Smith,john@example.com,555-1234,123 Main St,Austin,TX,78701,Prefers morning appointments
Sarah,Johnson,sarah@example.com,555-5678,456 Oak Ave,Austin,TX,78702,Gate code: 1234
\`\`\`

## Importing the file

1. Navigate to **Customers → Import**
2. Click **Choose File** and select your CSV
3. Review the column mapping:
   - LinkServicePro will auto-match column names
   - Manually map any unrecognized columns
4. Preview the first 5 records to verify accuracy
5. Click **Import Customers**

The system will:
- Validate all data
- Flag any errors or duplicates
- Show a summary before final import

## Handling duplicates

If customers already exist:

- **Skip**: Don't import duplicate records
- **Update**: Overwrite existing customer data
- **Merge**: Combine new info with existing records

Choose your preference during the import process.

## Common import errors

**"Invalid email format"**
- Ensure emails follow name@domain.com format
- Remove any extra spaces

**"Missing required field"**
- Every row must have First Name, Last Name, and Email or Phone
- Check for blank cells in required columns

**"Address not recognized"**
- Use full street addresses (not PO boxes)
- Include city and state for geocoding

**"Duplicate customer"**
- System detected matching email or phone
- Choose Skip or Update option

## Post-import checklist

After importing:

1. Review the import summary
2. Spot-check a few customer records for accuracy
3. Assign tags or categories if needed
4. Set up any custom fields
5. Enable customer portal access (optional)

## Tips for clean imports

- Clean your data in Excel/Sheets before importing
- Remove test or dummy records
- Standardize formats (e.g., phone numbers as 555-1234 or (555) 123-4567)
- Use consistent abbreviations (St vs Street)

## Re-importing updates

Need to update customer data later?

1. Export current customers to CSV
2. Make changes in the spreadsheet
3. Re-import with "Update" option for duplicates

This is useful for bulk updates like adding tags or changing service areas.

## Need help?

If your CSV has complex data or doesn't match our template:

- Email your file to support@linkservicepro.com
- We'll clean it and import it for you (usually within 24 hours)
- Or schedule a live import session with our team`
      },
      {
        slug: "user-roles-and-permissions",
        title: "Understanding user roles and permissions",
        content: `# Understanding user roles and permissions

LinkServicePro uses role-based access control to ensure team members see only what they need.

## Default roles

### Owner
- Full access to everything
- Manage billing and subscription
- Add/remove users
- Cannot be removed or downgraded

### Admin
- All permissions except billing
- Manage settings and integrations
- View all financial data
- Add/remove team members (except Owner)

### Dispatcher
- Schedule and assign jobs
- View and edit customer records
- Create quotes and invoices
- Run reports
- Cannot access billing or settings

### Technician
- Mobile app access only
- View assigned jobs
- Update job status
- Capture signatures and photos
- Cannot see other technicians' schedules or pricing

### Office Staff
- View-only access to customers and jobs
- Answer customer questions
- Schedule appointments (cannot assign technicians)
- Cannot access financial data

## Permission matrix

| Feature | Owner | Admin | Dispatcher | Technician | Office |
|---------|-------|-------|------------|------------|--------|
| Manage billing | ✓ | ✗ | ✗ | ✗ | ✗ |
| Company settings | ✓ | ✓ | ✗ | ✗ | ✗ |
| Add/remove users | ✓ | ✓ | ✗ | ✗ | ✗ |
| Schedule jobs | ✓ | ✓ | ✓ | ✗ | ✓ |
| Assign technicians | ✓ | ✓ | ✓ | ✗ | ✗ |
| View all jobs | ✓ | ✓ | ✓ | ✗ | ✓ |
| View own jobs | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create quotes | ✓ | ✓ | ✓ | ✗ | ✗ |
| Create invoices | ✓ | ✓ | ✓ | ✗ | ✗ |
| Process payments | ✓ | ✓ | ✓ | ✗ | ✗ |
| View financials | ✓ | ✓ | ✓ | ✗ | ✗ |
| Manage customers | ✓ | ✓ | ✓ | ✗ | View only |
| Run reports | ✓ | ✓ | ✓ | ✗ | ✗ |

## Custom roles (Enterprise plan)

Enterprise customers can create custom roles with granular permissions:

- Limit access to specific job types
- Restrict visibility to certain customers or territories
- Control which reports are visible
- Set approval workflows for quotes over a certain amount

Contact support to enable custom roles.

## Changing user roles

1. Go to **Team → Manage Users**
2. Click the user you want to modify
3. Select a new role from the dropdown
4. Click **Save**

Changes take effect immediately. Active users will need to log out and back in.

## Best practices

### Use the principle of least privilege
Only grant the access someone needs to do their job. Don't make everyone an Admin.

### Protect Owner access
Only share Owner credentials with trusted partners or stakeholders.

### Review permissions quarterly
Audit who has access to what, especially after role changes or terminations.

### Use Technician role for field staff
Don't give field teams Dispatcher access—they don't need to see pricing, schedules, or financials.

### Separate billing from operations
Keep billing/subscription management limited to Owner and one trusted Admin.

## Security tips

- Require strong passwords (minimum 12 characters)
- Enable two-factor authentication for Admins and Owners
- Deactivate users immediately upon termination
- Don't share login credentials between team members
- Use SSO (Single Sign-On) if available on your plan

## Troubleshooting

**"You don't have permission to access this feature"**
- Contact your Admin or Owner to request elevated permissions
- They can assign you a different role if needed

**User can't log in after role change**
- Have them log out completely and log back in
- Clear browser cache or restart the mobile app

**Need more granular control?**
- Upgrade to Enterprise for custom role creation
- Or contact support for workarounds`
      }
    ]
  },
  {
    id: "scheduling-dispatch",
    name: "Scheduling & Dispatch",
    icon: "Calendar",
    articles: [
      {
        slug: "creating-a-new-job",
        title: "Creating and assigning a new job",
        content: `# Creating and assigning a new job

Jobs are the core of LinkServicePro. Here's how to create and dispatch work efficiently.

## Creating a job from the calendar

1. Navigate to **Schedule** in the main menu
2. Click **New Job** or click any open time slot
3. Fill in the job details:
   - **Customer**: Select existing or create new
   - **Service Type**: Choose from your service catalog
   - **Date & Time**: Pick start time and estimated duration
   - **Technician**: Assign to available crew member
   - **Priority**: Normal, High, or Emergency
   - **Notes**: Add any special instructions

4. Click **Save & Schedule**

The technician receives a push notification immediately.

## Creating a job from a quote

If a customer accepted a quote:

1. Go to **Quotes** and open the approved quote
2. Click **Convert to Job**
3. All details auto-populate from the quote
4. Assign technician and pick a date
5. Click **Schedule**

This ensures pricing and scope match what the customer approved.

## Auto-assignment

Enable auto-assignment to let the system pick the best technician based on:

- Proximity to the job site
- Availability in the time window
- Skills match for the service type
- Current workload

Go to **Schedule → Settings → Auto-Assignment** to configure rules.

## Recurring jobs

For maintenance contracts or repeat customers:

1. Create the first job as normal
2. Check **Make Recurring**
3. Choose frequency:
   - Daily
   - Weekly (select day of week)
   - Monthly (select day of month)
   - Custom interval
4. Set end date (or leave open-ended)

The system auto-generates future jobs and assigns them to the same technician (if available).

## Dispatching from the map view

1. Switch to **Map View** in the schedule
2. See all jobs as pins, color-coded by status
3. Drag jobs to technicians or time slots
4. The system recalculates routes in real-time

This visual approach helps optimize drive time.

## Job statuses

| Status | Meaning |
|--------|---------|
| Scheduled | On the calendar, not started |
| En Route | Technician traveling to site |
| In Progress | Work actively happening |
| Paused | Waiting on parts/approval |
| Completed | Work finished, pending invoice |
| Canceled | Job didn't happen |

Technicians update status from their mobile app.

## Rescheduling a job

1. Open the job details
2. Click **Reschedule**
3. Pick a new date/time
4. Optionally notify the customer
5. Click **Save**

The customer receives an automated email with the new appointment time.

## Emergency jobs

For urgent work:

1. Click **New Job** and select **Emergency** priority
2. The system highlights available technicians
3. Override the schedule if needed (it will warn of conflicts)
4. Dispatch immediately

Emergency jobs show in red on the calendar and jump to the top of the mobile app.

## Tips for efficient dispatching

- **Batch similar jobs** in the same area to reduce drive time
- **Leave buffer time** between jobs for unexpected delays
- **Check the weather** before scheduling outdoor work
- **Confirm parts availability** before assigning installation jobs
- **Use job templates** for common service types to speed up creation

## Notifications

Customers automatically receive:
- Appointment confirmation (email + SMS)
- Reminder 24 hours before (configurable)
- "Technician is on the way" alert (when status changes to En Route)
- Job completion summary

Configure notification settings under **Settings → Notifications**.

## Common issues

**Technician doesn't see the job**
- Ensure they're logged into the mobile app
- Check that the job is assigned to them specifically
- Have them pull to refresh the job list

**Can't schedule at a certain time**
- Verify business hours in settings
- Check for technician time-off blocks
- Look for conflicting jobs

**Customer didn't receive notification**
- Confirm their email/phone is correct in customer record
- Check spam folder
- Verify notifications are enabled in Settings

Need more help? Contact support@linkservicepro.com.`
      },
      {
        slug: "optimizing-routes",
        title: "Route optimization and GPS tracking",
        content: `# Route optimization and GPS tracking

Reduce drive time and fuel costs with intelligent routing and real-time GPS visibility.

## Enabling GPS tracking

### For the office
GPS tracking is enabled by default. View live technician locations under **Map View** in the schedule.

### For technicians
1. Install the mobile app
2. Grant Location permissions when prompted
3. Set to "Always" (not "While Using App") for best results

The app tracks location only during work hours, not 24/7.

## Route optimization basics

### Automatic route sequencing

The system automatically orders jobs to minimize drive time:

1. Go to **Schedule → Map View**
2. Select a technician
3. Click **Optimize Route**
4. The system reorders jobs to reduce total mileage

You'll see before/after drive time and fuel savings estimates.

### Manual route adjustment

Drag jobs up or down in the schedule to reorder them. The map updates the route in real-time.

## Understanding the route algorithm

The optimizer considers:

- **Distance between job sites**
- **Traffic conditions** (real-time data from mapping services)
- **Appointment windows** (customers with strict time requirements get priority)
- **Technician start location** (home or office)

It won't violate scheduled appointment times—only fill gaps with flexible jobs.

## Territory-based dispatch

Assign technicians to service areas:

1. Go to **Team → Technicians**
2. Click a technician
3. Under **Territories**, draw or select their primary zones
4. Jobs in those zones auto-suggest that technician

This reduces cross-town trips and keeps crews in familiar areas.

## Real-time tracking features

### Live map view
See all technicians as moving dots on the map. Click a dot to see:
- Name
- Current job
- Next destination
- Estimated arrival time

### Customer ETAs
When a job is "En Route," customers automatically receive a link to track the technician's location and live ETA.

### Geofencing
Set arrival/departure detection:
- Technician clock-in happens automatically when entering a job site
- Clock-out when leaving
- No manual time tracking needed

Configure under **Settings → GPS → Geofencing**.

## Handling traffic and delays

If a technician is delayed:

1. The system auto-adjusts ETAs for remaining jobs
2. Customers with appointments get notified of revised times
3. Dispatch can reassign jobs if delays are severe

## Reporting and analytics

### Route efficiency reports

Go to **Reports → Route Efficiency** to see:

- Average drive time per job
- Total miles driven per technician
- Fuel cost estimates
- Optimization opportunities (jobs that could be batched better)

### Mileage logs for reimbursement

Automatically generate IRS-compliant mileage logs:

1. **Reports → Mileage**
2. Select date range and technician
3. Export to CSV

No more manual odometer tracking.

## Privacy and compliance

### What we track
- Location during scheduled work hours
- Route history for jobs
- Time spent at job sites

### What we don't track
- Personal trips
- Off-hours location
- Location when clocked out

Technicians can pause tracking during breaks or personal errands.

### Compliance
- GDPR and CCPA compliant
- Data encrypted in transit and at rest
- Retention: 90 days (configurable)

## Troubleshooting GPS issues

**Technician location not updating**
- Verify Location is enabled in phone settings
- Check internet connection (GPS needs data to update the server)
- Restart the mobile app

**Inaccurate location**
- Technician might be indoors (GPS signal weak)
- Ask them to step outside briefly to refresh signal
- Check if phone has Location set to "High Accuracy"

**Route optimizer not working**
- Ensure all jobs have valid addresses
- Check that addresses are geocoded (have lat/long coordinates)
- Try optimizing fewer jobs at once (max 20 per technician per day)

## Tips for maximum efficiency

- **Review optimized routes each morning** before dispatch
- **Set appointment windows generously** (e.g., 8-10am instead of 9am sharp) to give optimizer flexibility
- **Batch jobs in the same zip code** when possible
- **Use historical traffic data** to avoid peak congestion times
- **Assign home base locations** for technicians who start from home

For advanced routing features (multi-day optimization, vehicle capacity limits), contact us about Enterprise add-ons.`
      },
      {
        slug: "recurring-jobs",
        title: "Setting up recurring maintenance schedules",
        content: `# Setting up recurring maintenance schedules

Automate repeat service appointments for maintenance contracts and loyal customers.

## Creating a recurring job

### From the schedule

1. Create a new job as usual
2. Check the **Recurring** box
3. Select frequency:
   - Weekly (choose day of week)
   - Bi-weekly
   - Monthly (choose date)
   - Quarterly
   - Annually
   - Custom interval

4. Set start date and optional end date
5. Assign technician (same one for all instances)
6. Save

The system generates all future instances automatically.

### From a customer record

1. Open the customer's profile
2. Go to **Service History** tab
3. Click **Create Recurring Schedule**
4. Follow the same steps above

## Managing recurring series

### Viewing all instances

Go to **Schedule → Recurring Jobs** to see:

- All active recurring series
- Next scheduled date for each
- Total instances created
- Revenue from recurring customers

### Editing a series

Click any instance and choose:

- **Edit This Instance Only**: Change just one occurrence
- **Edit All Future**: Update all upcoming instances
- **Edit Entire Series**: Modify all instances (past and future)

### Pausing a series

If a customer goes on vacation or pauses service:

1. Open the recurring series
2. Click **Pause**
3. Select resume date
4. All instances in between are canceled

### Canceling a series

To stop a recurring schedule:

1. Open the series
2. Click **Cancel Series**
3. Choose:
   - Cancel all future instances
   - Cancel from a specific date forward

Already-completed jobs are not affected.

## Common recurring schedule examples

### HVAC maintenance (quarterly)
- Frequency: Every 3 months
- Duration: 1.5 hours
- Technician: Same certified HVAC tech
- Auto-invoice: Enabled

### Lawn care (weekly)
- Frequency: Every Monday
- Duration: 1 hour
- Technician: Route-optimized (can vary)
- Auto-schedule: 1 week in advance

### Pool service (bi-weekly)
- Frequency: Every other Wednesday
- Duration: 45 minutes
- Technician: Assigned to territory
- Customer reminder: 1 day before

### Annual inspections
- Frequency: Once per year
- Duration: 2 hours
- Reminder: 30 days before
- Auto-create quote for additional work

## Auto-invoicing recurring jobs

Enable automatic billing for repeat customers:

1. Open the recurring series
2. Check **Auto-Invoice on Completion**
3. Set payment terms (e.g., Net 30)
4. Choose payment method on file

When the technician completes a job, the invoice is:
- Generated automatically
- Emailed to the customer
- Charged to their card (if auto-pay is enabled)

No manual invoicing needed.

## Customer notifications

For recurring jobs, customers receive:

- **Initial confirmation** when series is created
- **Reminders** 24 hours before each appointment (customizable)
- **Rescheduling notice** if you change a date
- **Cancellation notice** if series is paused or stopped

Configure settings under **Settings → Notifications → Recurring Jobs**.

## Recurring vs. Contracts

### Use Recurring Jobs for:
- Regular maintenance (HVAC, lawn, pool)
- Weekly/monthly cleaning
- Preventive inspections

### Use Contracts for:
- Complex multi-phase projects
- Retainer-based agreements
- Jobs requiring milestone billing

Contracts are a separate feature under **Contracts** (see Help Center → Contracts).

## Reporting on recurring revenue

Track the value of your recurring business:

1. **Reports → Recurring Revenue**
2. View:
   - Monthly recurring revenue (MRR)
   - Customer retention rate
   - Upcoming scheduled revenue
   - Churn (canceled series)

This helps forecast cash flow and growth.

## Best practices

- **Set realistic intervals**: Don't schedule more frequently than you can reliably fulfill
- **Assign the same technician**: Customers appreciate consistency
- **Build in buffer time**: If a quarterly job might take 1-2 hours, schedule 2 hours
- **Automate reminders**: Reduce no-shows with automated confirmations
- **Review quarterly**: Check for inactive series and re-engage lapsed customers

## Troubleshooting

**Future instances not appearing on calendar**
- Check that the series end date isn't in the past
- Verify the series isn't paused
- Ensure you're viewing far enough ahead in the calendar

**Customer keeps rescheduling**
- Consider switching to "flexible window" appointments
- Let them choose preferred day/time in customer portal

**Technician availability conflicts**
- Use auto-assignment instead of hard-assigning one technician
- Or set the series to "unassigned" and assign weekly as needed

For more help with recurring schedules, contact support@linkservicepro.com.`
      },
      {
        slug: "handling-emergencies",
        title: "Handling emergency service calls",
        content: `# Handling emergency service calls

Emergency calls require fast response and flexible scheduling. Here's how to handle them without disrupting your planned day.

## Enabling emergency mode

Emergency jobs get special priority in the system:

1. Go to **Settings → Emergency Services**
2. Enable **Emergency Job Priority**
3. Set emergency response time target (e.g., 2 hours)
4. Configure emergency pricing multiplier (e.g., 1.5x for after-hours)

## Creating an emergency job

### Quick method

1. Click **Emergency** button in the top nav (or press **E** on keyboard)
2. Enter customer phone number (system looks up existing customer or creates new)
3. Describe the issue briefly
4. Click **Dispatch Now**

The system auto-assigns the nearest available technician.

### Detailed method

1. Create a new job as usual
2. Set **Priority** to **Emergency**
3. The job highlights in red on the calendar
4. Optionally override technician schedules (system warns of conflicts)

## Auto-dispatch logic

When you create an emergency job, the system:

1. Identifies all available technicians
2. Calculates drive time from their current location
3. Checks if they have the right skills/equipment
4. Suggests the best option

You can override and manually assign if needed.

## Notifying technicians

Emergency jobs trigger immediate notifications:

- **Push notification**: High-priority alert on mobile app
- **SMS**: Backup text message with job details
- **Phone call**: Optional (enable in Settings → Emergency → Call Technician)

Technicians must acknowledge within 5 minutes or the job escalates to the next available person.

## Handling schedule conflicts

If the closest technician has a scheduled job:

### Option 1: Overlap the schedule
Accept that the emergency might delay other jobs. The system auto-notifies affected customers of potential delays.

### Option 2: Reassign the scheduled job
Move the non-urgent job to another technician or reschedule it.

### Option 3: Send backup crew
If you have multiple technicians, send a less-optimal but still available person.

The system shows estimated impact of each choice.

## Emergency pricing

Configure after-hours or emergency surcharges:

1. **Settings → Pricing → Emergency Rates**
2. Set multiplier (e.g., 1.5x standard rate)
3. Apply to:
   - After-hours (outside business hours)
   - Weekends
   - Holidays
   - All emergencies (regardless of time)

Customers see the emergency rate on the quote/invoice.

## On-call rotation

Set up on-call schedules for 24/7 coverage:

1. **Team → On-Call Schedule**
2. Assign technicians to days/weeks
3. System auto-assigns emergencies to whoever is on-call

Technicians see their on-call shifts in the mobile app.

## Customer communication

When an emergency job is created:

- Customer receives **immediate SMS** with technician name and ETA
- **Live tracking link** so they can see technician's location
- **Direct call button** to reach the technician

## SLA tracking

Monitor emergency response performance:

1. **Reports → Emergency Response**
2. View:
   - Average response time
   - SLA compliance (% of emergencies resolved within target)
   - After-hours volume
   - Emergency revenue

Use this data to decide if you need more on-call staff.

## Common emergency scenarios

### Burst pipe (plumbing)
- Priority: Critical
- Response target: 1 hour
- Pricing: 2x after-hours rate
- Auto-dispatch: Nearest plumber with water shutoff tools

### No heat in winter (HVAC)
- Priority: High
- Response target: 4 hours
- Pricing: 1.5x standard rate
- Auto-dispatch: HVAC-certified technician

### Power outage (electrical)
- Priority: Critical
- Response target: 2 hours
- Pricing: Emergency rate + safety surcharge
- Auto-dispatch: Licensed electrician only

### Locked out (locksmith)
- Priority: Medium
- Response target: 30 minutes
- Pricing: Flat emergency fee
- Auto-dispatch: Closest locksmith

## Best practices

- **Set clear expectations**: Tell customers upfront about emergency fees and ETAs
- **Keep emergency inventory stocked**: Common parts for urgent repairs (water heaters, circuit breakers, etc.)
- **Train all technicians on emergency protocols**: They should know how to handle urgent calls professionally
- **Review emergency calls weekly**: Look for patterns (same customer calling often? recurring issue?)
- **Offer emergency service contracts**: Loyal customers pay a monthly fee for priority emergency response

## Troubleshooting

**Technician didn't receive emergency alert**
- Check their notification settings (might have disabled push or SMS)
- Verify they're clocked in and app is running
- Call them directly as backup

**Customer complaining about emergency fees**
- Explain upfront before dispatch: "After-hours emergency rate is $X"
- Show standard vs. emergency pricing on the invoice
- Offer to schedule non-urgent work at standard rates

**Overwhelmed with emergencies**
- You might be under-staffed or under-pricing preventive maintenance
- Encourage customers to book regular maintenance to avoid emergencies
- Consider dedicated emergency-only technician during peak seasons

For urgent support, call our 24/7 line: 1-800-LINKPRO.`
      }
    ]
  },
  {
    id: "quotes-invoices",
    name: "Quotes & Invoices",
    icon: "FileText",
    articles: [
      {
        slug: "creating-professional-quotes",
        title: "Creating professional quotes",
        content: `# Creating professional quotes

Win more jobs with polished, detailed estimates that customers can approve with one click.

## Creating a quote from scratch

1. Navigate to **Quotes → New Quote**
2. Select customer (or create new)
3. Add line items:
   - Service description
   - Quantity
   - Unit price
   - Total (auto-calculated)
4. Optionally add:
   - Photos or attachments
   - Terms and conditions
   - Payment schedule
   - Expiration date
5. Preview the quote
6. Click **Send to Customer**

The customer receives a professional PDF via email with an **Approve** button.

## Using quote templates

Save time with pre-built templates:

1. **Settings → Quote Templates**
2. Create templates for common jobs (e.g., "Standard HVAC Maintenance")
3. Include default line items, pricing, and descriptions
4. When creating a new quote, select a template

All items populate automatically—just adjust quantities or pricing as needed.

## Good-Better-Best pricing

Offer tiered options to increase average sale:

1. Enable **Tiered Quotes** in Settings
2. Create three packages:
   - **Good**: Basic scope, lowest price
   - **Better**: Standard scope, moderate price
   - **Best**: Premium scope with extras, highest price
3. Send one quote with all three options

Customers see the comparison and often choose Better or Best.

### Example: HVAC Tune-Up

**Good** ($149)
- Basic inspection
- Filter replacement

**Better** ($249)
- Full inspection
- Filter replacement
- Duct cleaning
- Performance report

**Best** ($399)
- Everything in Better
- Refrigerant top-off
- Thermostat calibration
- 1-year priority service

## Adding photos and diagrams

Visual quotes convert better:

1. In the quote editor, click **Add Media**
2. Upload photos from the site visit
3. Annotate with arrows or notes (built-in editor)
4. Photos appear inline with line items

Example: Show before/after shots, or highlight problem areas.

## Payment terms and deposits

Configure payment requirements:

- **Full payment upfront**: Best for small jobs
- **Deposit + balance on completion**: Common for larger projects (e.g., 50% down)
- **Milestone billing**: For multi-phase work
- **Net 30**: For commercial accounts

Set terms in the quote under **Payment Schedule**.

## Digital approval

Customers can approve quotes via:

- **Email link**: Click "Approve Quote" in the email
- **Customer portal**: Log in and review all quotes
- **SMS link**: Text message with approval link (mobile-friendly)

Once approved:
- You're notified instantly
- Quote converts to a job or invoice
- Customer receives confirmation

No printing, signing, or scanning required.

## Quote expiration

Set expiration dates to create urgency:

1. In the quote, set **Valid Until** date (e.g., 14 days)
2. System auto-sends reminder 3 days before expiration
3. After expiration, quote shows "Expired" and can't be approved

Prevents customers from accepting months-old pricing.

## Following up on quotes

Track quote status:

- **Sent**: Customer received but hasn't opened
- **Viewed**: Customer opened the quote
- **Approved**: Customer accepted
- **Declined**: Customer rejected
- **Expired**: Validity period passed

Use automated follow-up sequences:

1. **Day 1**: Initial quote sent
2. **Day 3**: "Did you have questions?" email
3. **Day 7**: "Still interested? Price good for 7 more days"
4. **Day 12**: Final reminder before expiration

Configure under **Settings → Quote Follow-Ups**.

## Converting quotes to jobs or invoices

### If approved:

- **Service-based**: Convert to a scheduled job
- **Product-based**: Convert directly to invoice (skip scheduling)

### If customer requests changes:

1. Open the quote
2. Click **Revise**
3. Make adjustments
4. Save as new version (old version archived)
5. Resend

Customers see version history.

## Custom branding

Make quotes look like your brand:

1. **Settings → Templates → Quote Template**
2. Upload logo
3. Choose color scheme
4. Add tagline or company description
5. Include license numbers or certifications

Templates apply to all quotes automatically.

## Common quote mistakes to avoid

- **Too vague**: "Install AC unit" doesn't explain what's included
- **No expiration**: Lets customers sit on old pricing
- **Ugly formatting**: Dense text walls scare customers off
- **No call to action**: Make approval brain-dead easy
- **Missing contact info**: Customer should know who to call with questions

## Reporting

Track quote performance:

1. **Reports → Quotes**
2. View:
   - Total quoted revenue
   - Conversion rate (approved ÷ sent)
   - Average quote value
   - Time to approval

Use this data to improve your sales process.

---

**Pro tip**: The faster you send a quote after a site visit, the higher your close rate. LinkServicePro lets you create and send quotes from your phone while still on-site.`
      },
      {
        slug: "invoice-best-practices",
        title: "Invoice creation and payment collection",
        content: `# Invoice creation and payment collection

Get paid faster with professional invoices and automated payment reminders.

## Creating an invoice

### From a completed job

1. Go to **Jobs** and open a completed job
2. Click **Create Invoice**
3. All job details auto-populate:
   - Services performed
   - Materials used
   - Labor hours
   - Pricing from the quote (if applicable)
4. Review and adjust if needed
5. Click **Send Invoice**

### From scratch

1. **Invoices → New Invoice**
2. Select customer
3. Add line items manually
4. Set due date and payment terms
5. Send

## Invoice components

A complete invoice includes:

- **Invoice number**: Auto-generated, sequential
- **Invoice date**: Date issued
- **Due date**: When payment is expected
- **Customer billing info**: Name, address, contact
- **Line items**: Description, quantity, rate, total
- **Subtotal, tax, total**: Auto-calculated
- **Payment terms**: Net 15, Net 30, Due on Receipt, etc.
- **Payment methods**: How customer can pay

## Payment methods

### Accept credit cards

1. **Settings → Payments → Connect Processor**
2. Choose from:
   - Stripe
   - Square
   - PayPal
3. Follow setup wizard
4. Customers can pay invoices via card (web or mobile)

Fees typically 2.9% + 30¢ per transaction.

### ACH/Bank transfer

Lower fees (0.8%) for larger invoices:

1. Enable ACH in payment settings
2. Customers enter bank account info
3. Funds arrive in 3-5 business days

### Check or cash

Mark invoices as paid manually:

1. Open the invoice
2. Click **Record Payment**
3. Enter amount, date, and method
4. Save

## Automated payment reminders

Set up reminder sequences:

1. **Settings → Invoices → Payment Reminders**
2. Configure:
   - Reminder 3 days before due date
   - Reminder on due date
   - Reminder 3 days after due date (overdue)
   - Reminder 7 days overdue
   - Final notice 14 days overdue

Customers receive emails automatically—you don't lift a finger.

## Handling partial payments

If a customer pays only part of an invoice:

1. Open the invoice
2. Click **Record Payment**
3. Enter partial amount
4. Invoice shows remaining balance
5. Send reminder for the balance

## Late fees and interest

Discourage late payment:

1. **Settings → Invoices → Late Fees**
2. Choose:
   - Flat fee (e.g., $25 after 10 days late)
   - Percentage (e.g., 1.5% per month)
   - Compound interest

Late fees are added automatically and shown on statements.

## Customer payment portals

Let customers view and pay invoices online:

1. Enable **Customer Portal** in Settings
2. Customers receive login credentials
3. They can:
   - View all invoices
   - See payment history
   - Pay outstanding balances
   - Download receipts

This reduces "I didn't receive the invoice" excuses.

## Invoice statuses

| Status | Meaning |
|--------|---------|
| Draft | Not yet sent |
| Sent | Delivered to customer |
| Viewed | Customer opened it |
| Partially Paid | Some payment received |
| Paid | Fully paid |
| Overdue | Past due date, unpaid |
| Canceled | Voided or canceled |

## Customizing invoice templates

1. **Settings → Templates → Invoice Template**
2. Customize:
   - Logo and branding
   - Color scheme
   - Footer text (e.g., "Thank you for your business")
   - Payment instructions
3. Save as default

## Recurring invoices

For contracts or ongoing services:

1. Create the first invoice
2. Check **Make Recurring**
3. Set frequency (weekly, monthly, etc.)
4. System auto-generates and sends future invoices

Great for maintenance contracts or retainer clients.

## Statements for overdue accounts

If a customer has multiple overdue invoices:

1. **Invoices → Statements**
2. Select customer
3. Generate statement showing all unpaid invoices
4. Send via email

Statements provide a clear summary of what's owed.

## Reporting

Track your receivables:

1. **Reports → Accounts Receivable**
2. View:
   - Total outstanding
   - Aging report (0-30 days, 31-60 days, 60+ days)
   - Average days to payment
   - Write-off history

Use this to identify slow-paying customers and adjust your terms.

## Best practices

- **Send invoices immediately** after job completion (same day)
- **Offer multiple payment methods** to remove friction
- **Set clear payment terms** upfront (before starting work)
- **Follow up promptly** on overdue invoices (don't wait weeks)
- **Make it easy to pay** (one-click links, mobile-friendly)

## Troubleshooting

**Customer says they didn't receive invoice**
- Check spam folder
- Resend from the invoice details page
- Verify email address is correct

**Customer disputes charges**
- Review job notes and photos
- Compare to original quote
- Offer to discuss and adjust if warranted

**Integrating with accounting software**
- LinkServicePro syncs with QuickBooks, Xero, and FreshBooks
- Invoices and payments automatically flow to your accounting system
- See Help → Integrations for setup

---

**Get paid faster**: On average, LinkServicePro customers get paid 40% faster with automated reminders and one-click payment links.`
      },
      {
        slug: "payment-processing-setup",
        title: "Setting up payment processing",
        content: `# Setting up payment processing

Accept credit cards, ACH, and digital payments directly through LinkServicePro.

## Supported payment processors

Choose your preferred provider:

- **Stripe**: Most popular, competitive rates, fast setup
- **Square**: Includes free card reader for in-person payments
- **PayPal**: Good if you already have a PayPal business account

You can enable multiple processors if needed.

## Connecting Stripe

1. **Settings → Payments → Add Processor**
2. Click **Stripe**
3. Click **Connect with Stripe**
4. Log in to your Stripe account (or create one)
5. Authorize LinkServicePro to process payments
6. Done! You're live in under 5 minutes.

### Stripe fees

- **Credit/debit cards**: 2.9% + 30¢ per transaction
- **ACH bank transfer**: 0.8% (capped at $5)
- **No monthly fees** or hidden charges

## Connecting Square

1. **Settings → Payments → Add Processor**
2. Click **Square**
3. Log in to your Square account
4. Authorize the connection
5. Order a free Square Reader (optional, for in-person card swipes)

### Square fees

- **Card present** (swiped/tapped): 2.6% + 10¢
- **Card not present** (online invoice): 2.9% + 30¢
- **Free card reader** included

## Connecting PayPal

1. **Settings → Payments → Add Processor**
2. Click **PayPal**
3. Log in with your PayPal Business credentials
4. Authorize the integration

### PayPal fees

- **Standard rate**: 3.49% + 49¢ per transaction
- **Higher fees than alternatives**, but convenient if customers already use PayPal

## Accepting ACH payments (bank transfers)

Lower fees for large invoices:

1. Enable ACH in **Settings → Payments**
2. Choose processor (Stripe and Square both support ACH)
3. Customers enter their bank routing and account numbers
4. Funds arrive in 3-5 business days

**Pro tip**: Offer a discount for ACH (e.g., "Pay via bank transfer and save 3%")—still cheaper than credit card fees.

## Payment methods on invoices

Once connected, invoices automatically include:

- **Pay by Card** button
- **Pay by Bank Transfer** option
- **PayPal Checkout** link (if enabled)

Customers choose their preferred method.

## In-person payments (field payments)

Technicians can collect payment on-site:

1. Ensure they have the mobile app installed
2. If using Square, they'll need the card reader (plugs into phone)
3. When completing a job:
   - Tap **Collect Payment**
   - Enter amount
   - Customer taps/swipes/inserts card
   - Receipt emails automatically

No need to wait for office invoicing.

## Recurring billing (auto-pay)

For maintenance contracts or subscriptions:

1. Customer authorizes auto-pay during initial setup
2. You store their payment method securely (via Stripe/Square vaults)
3. Recurring invoices charge their card automatically
4. Customer receives receipt via email

No manual payment collection needed.

## Security and PCI compliance

### LinkServicePro is PCI Level 1 compliant

- We never store raw card numbers
- All payment data is tokenized via Stripe/Square
- Transactions are encrypted end-to-end

### Customer data safety

- Payment info stored only with Stripe or Square (not on our servers)
- Two-factor authentication available for admin accounts
- Activity logs track who accessed payment settings

## Handling refunds

If you need to refund a customer:

1. Go to **Invoices** and open the paid invoice
2. Click **Issue Refund**
3. Enter refund amount (full or partial)
4. Choose reason (optional)
5. Confirm

Funds return to the customer's card in 5-10 business days.

## Chargebacks and disputes

If a customer disputes a charge:

1. You'll receive email notification from Stripe/Square
2. Log in to your processor's dashboard
3. Upload evidence:
   - Signed work order
   - Job photos
   - Customer communication
4. Processor mediates the dispute

**Best defense**: Detailed job documentation and signed customer approval.

## Payout schedule

Funds from payments hit your bank account:

- **Stripe**: 2 business days (can expedite to next day for a fee)
- **Square**: 1-2 business days
- **PayPal**: Instant to PayPal balance, 1 day to bank

Configure payout frequency under your processor settings.

## Multi-currency support (international)

If you serve international customers:

1. Enable multi-currency in Stripe or PayPal
2. Set pricing in USD, CAD, EUR, GBP, etc.
3. Customers pay in their local currency
4. You receive funds in your home currency (processor handles conversion)

Conversion fees: ~1-2% above exchange rate.

## Reporting

Track revenue and fees:

1. **Reports → Payments**
2. View:
   - Total revenue by payment method
   - Processing fees paid
   - Refund history
   - Chargeback rate

Also syncs to QuickBooks or Xero if integrated.

## Troubleshooting

**Payment button not showing on invoices**
- Verify processor is connected under Settings → Payments
- Check that processor account is active and verified

**Customer's card declined**
- Common reasons: insufficient funds, incorrect info, fraud protection
- Ask customer to use a different card or payment method

**Funds not arriving in bank account**
- Check processor dashboard for payout schedule
- Verify bank account details are correct
- Contact processor support if delayed beyond normal timeline

**Need to change bank account for payouts?**
- Log in to your Stripe/Square dashboard
- Update bank account under Settings
- Verification usually takes 1-2 days

---

**Ready to get paid online?** Connect your payment processor in Settings → Payments. Setup takes under 5 minutes.`
      }
    ]
  },
  {
    id: "payments",
    name: "Payments",
    icon: "CreditCard",
    articles: [
      {
        slug: "accepting-online-payments",
        title: "Accepting online payments from customers",
        content: `# Accepting online payments from customers

Make it easy for customers to pay you online—via invoice links, customer portal, or mobile app.

## How customers pay online

Once you've connected a payment processor (Stripe, Square, or PayPal), customers can pay:

1. **From invoice email**: Click "Pay Now" button → enter card info → done
2. **From customer portal**: Log in → view invoices → pay any outstanding balance
3. **From SMS link**: Receive text with payment link → pay on mobile
4. **In-person (mobile)**: Technician collects payment on-site via mobile app

All methods are mobile-friendly and secure.

## Sending payment links

### Via invoice

Invoices automatically include a **Pay Now** button when you have a processor connected.

### Via standalone payment link

To request payment without a full invoice:

1. **Payments → Payment Links**
2. Enter amount and description
3. Click **Generate Link**
4. Copy and paste the link in an email, text, or message

Great for deposits or quick one-off payments.

## Customer payment experience

### Step 1: Customer receives invoice

Email includes:
- Invoice details (services, amount due)
- **Pay Now** button prominently displayed

### Step 2: Click Pay Now

Redirects to secure payment page with your branding.

### Step 3: Enter payment info

- Card number, expiration, CVV
- Or select saved payment method (if returning customer)
- Or choose ACH bank transfer

### Step 4: Confirm

Customer sees confirmation screen and receives email receipt instantly.

## Storing payment methods

Customers can save payment methods for faster future payments:

1. During first payment, check **Save card for future use**
2. Card is tokenized and stored securely with Stripe/Square
3. Next time, they see "Pay with card ending in 1234" option

You never see or store actual card numbers—only the processor does.

## Auto-pay for recurring customers

Enable autopay for maintenance contracts:

1. Customer authorizes auto-pay during setup
2. When recurring invoices are generated, payment is charged automatically
3. Customer receives email receipt
4. No manual intervention needed

Reduces late payments and improves cash flow.

## Payment confirmation and receipts

After payment:

- **Customer** receives instant email receipt with transaction ID
- **You** receive notification in LinkServicePro
- **Your accounting system** (QuickBooks, Xero) syncs the payment automatically

## Partial payments

If a customer wants to pay in installments:

1. They enter a partial amount on the payment page
2. Invoice updates to show remaining balance
3. They can return later to pay the rest

Or you can set up a payment plan with scheduled installments.

## Handling failed payments

If a card is declined:

1. **Customer** sees error message (e.g., "Card declined—please try another")
2. **You** receive notification of failed attempt
3. **Automatic retry**: System re-attempts charge after 3 days (configurable)
4. If still failing, invoice marked overdue and reminder sent

## Security and trust

### Payment pages are PCI compliant

- All card data encrypted in transit
- No card numbers stored on LinkServicePro servers
- Stripe/Square are Level 1 PCI-certified processors

### Trust signals

Payment pages display:
- Your company name and logo
- SSL padlock (https://)
- Stripe or Square branding (familiar, trusted)
- "Powered by [Processor]" badge

This builds customer confidence.

## Mobile-optimized payment

Payment pages work seamlessly on phones:

- Large tap targets
- Auto-fill card details (if browser supports)
- Apple Pay and Google Pay supported
- Touch ID or Face ID for saved cards

80% of payments happen on mobile—make sure it's easy.

## Payment methods supported

### Credit and debit cards

- Visa, Mastercard, American Express, Discover
- Debit cards (bank cards)

### ACH bank transfers

- Lower fees (0.8% vs 2.9%)
- Customer enters routing + account number
- Funds arrive in 3-5 days

### Digital wallets

- Apple Pay
- Google Pay
- PayPal (if connected)

Enable under **Settings → Payments → Payment Methods**.

## Multi-currency support

If you serve international customers:

1. Enable multi-currency in Stripe settings
2. Customers see prices in their local currency
3. You receive funds in your home currency

Supported currencies: USD, CAD, EUR, GBP, AUD, and 100+ others.

## Reporting

Track payments received:

1. **Reports → Payments**
2. View:
   - Total revenue by payment method
   - Average payment time (days from invoice to payment)
   - Failed payment rate
   - Processing fees

## Common customer questions

**"Is it safe to enter my card online?"**
Yes—payment pages are encrypted and PCI-compliant. Card details go directly to Stripe or Square, not to us.

**"Can I pay later?"**
Yes, invoices have a due date. You can pay anytime before then (or after, though late fees may apply).

**"Do you store my card?"**
Only if you check "Save card for future use." You can delete saved cards anytime from your customer portal.

**"What if I was charged incorrectly?"**
Contact us and we can issue a refund. Refunds appear back on your card in 5-10 business days.

## Best practices

- **Enable one-click payment links** in all invoices
- **Accept multiple payment methods** (don't force customers to use one)
- **Send invoices immediately** after job completion—faster invoices = faster payment
- **Offer autopay** for recurring customers
- **Use payment reminders** to nudge late payers gently

---

**Get paid 2x faster**: Customers who receive online payment links pay invoices 48% faster on average vs. mailed paper invoices.`
      },
      {
        slug: "managing-failed-payments",
        title: "Managing failed payments and retries",
        content: `# Managing failed payments and retries

Handle declined payments gracefully with automatic retries and smart follow-up.

## Why payments fail

Common reasons cards are declined:

- **Insufficient funds**: Customer's account balance too low
- **Expired card**: Card on file has passed expiration date
- **Incorrect info**: Wrong CVV, zip code, or card number
- **Fraud protection**: Bank flagged transaction as suspicious
- **Card limit reached**: Daily or monthly spending cap hit
- **International blocks**: Card doesn't allow foreign transactions

## Automatic retry logic

When a payment fails, LinkServicePro automatically:

1. **Notifies the customer** via email with reason for decline
2. **Retries the charge** 3 days later (configurable)
3. **Retries again** after 7 days if still failing
4. **Final attempt** at 14 days

You can adjust retry schedule under **Settings → Payments → Failed Payment Retries**.

## Customer notifications

Failed payment emails include:

- **Clear explanation**: "Your card ending in 1234 was declined due to insufficient funds"
- **Next steps**: "Please update your payment method to avoid service interruption"
- **Payment link**: One-click to update card or pay manually

Friendly and professional—not accusatory.

## Updating payment methods

Customers can update their card:

1. Click **Update Payment Method** in the email
2. Enter new card details
3. System automatically retries the charge

Or update via customer portal under **Payment Methods**.

## Manual retry

If you want to retry a failed payment before the auto-retry:

1. Go to **Invoices** and open the invoice
2. Click **Retry Payment**
3. System attempts to charge the saved card immediately
4. Result appears instantly (success or new decline reason)

## Handling recurring billing failures

For subscription or contract customers with autopay:

### First failed payment

- Auto-retry in 3 days
- Customer notified
- Service continues (grace period)

### Second failed payment

- Auto-retry in 7 days
- Stronger reminder sent
- Account marked "Payment Issue"

### Third failed payment

- Final attempt at 14 days
- Account suspended if payment still fails
- Customer must pay manually to reactivate

Configure grace period under **Settings → Recurring Billing → Failed Payment Policy**.

## Dunning management

Dunning = recovering failed payments from subscribers.

LinkServicePro's dunning sequence:

1. **Day 0**: Payment fails → friendly "update your card" email
2. **Day 3**: Auto-retry + reminder
3. **Day 7**: Second retry + "account at risk" warning
4. **Day 14**: Final retry + suspension notice
5. **Day 15+**: Account suspended, manual payment required

You can customize the messaging and timeline.

## Preventing failed payments

### Proactive card expiration alerts

System monitors saved cards and alerts customers 30 days before expiration:

- **Email**: "Your card ending in 1234 expires next month—update now"
- **Customer portal**: Red banner to update payment method

### Account updater (Stripe feature)

If using Stripe, enable **Account Updater**:

- Automatically retrieves updated card info from banks (when customer gets a reissued card)
- No customer action needed—card updates behind the scenes
- Reduces failed payments by 30%

Enable under **Settings → Payments → Stripe → Account Updater**.

## Reporting on failed payments

Track payment issues:

1. **Reports → Failed Payments**
2. View:
   - Total failed payment volume
   - Reasons for declines (insufficient funds, expired cards, etc.)
   - Recovery rate (% of failed payments eventually collected)
   - Customers with recurring failures

Use this data to identify problem patterns.

## Manual collection for persistent failures

If retries keep failing:

1. Contact the customer directly (phone or email)
2. Offer alternative payment methods:
   - ACH bank transfer (lower chance of decline)
   - Check or cash
   - Payment plan (split into smaller amounts)
3. If still no payment, consider:
   - Pausing service
   - Sending to collections (last resort)

## Best practices

- **Update cards before they expire**: Proactive alerts reduce failures
- **Use ACH for large amounts**: Less likely to hit card limits
- **Be empathetic**: Failed payments are often embarrassing for customers—be kind
- **Offer payment plans**: If a customer can't afford the full amount, installments help
- **Monitor retry success rate**: If <50%, adjust retry timing or messaging

## Troubleshooting

**Customer says card should work but keeps declining**
- Ask them to call their bank—it might be fraud protection
- Try a different card
- Use ACH instead

**Retries not happening automatically**
- Verify auto-retry is enabled in Settings → Payments
- Check that a payment method is saved on file

**Customer updated card but charge still failing**
- Ensure new card was saved (check customer payment methods)
- Manually retry the payment

**Getting too many failed payment notifications**
- Adjust notification settings to only alert on final failure
- Or set up filters to route failed payment emails to a specific folder

---

**Reduce failed payments**: Enable Stripe Account Updater and proactive expiration alerts to keep payment methods current.`
      }
    ]
  },
  {
    id: "integrations",
    name: "Integrations",
    icon: "Plug",
    articles: [
      {
        slug: "quickbooks-integration",
        title: "Connecting QuickBooks for accounting sync",
        content: `# Connecting QuickBooks for accounting sync

Sync invoices, payments, and expenses automatically between LinkServicePro and QuickBooks.

## What syncs automatically

Once connected, data flows both ways:

### From LinkServicePro → QuickBooks

- **Invoices**: Created as invoices in QuickBooks
- **Payments**: Recorded as payments against invoices
- **Customers**: Added as customers in QuickBooks
- **Expenses**: Materials and costs sync as expenses

### From QuickBooks → LinkServicePro

- **Customer updates**: Changes to customer info sync back
- **Chart of accounts**: Income/expense categories import

## Connecting QuickBooks Online

1. **Settings → Integrations → QuickBooks Online**
2. Click **Connect to QuickBooks**
3. Log in with your QuickBooks credentials
4. Authorize LinkServicePro to access your data
5. Map your accounts:
   - Income account (e.g., "Service Revenue")
   - Expense accounts (e.g., "Materials," "Subcontractors")
   - Payment accounts (e.g., "Checking," "Stripe")
6. Choose sync frequency:
   - Real-time (recommended)
   - Daily batch
   - Manual only
7. Click **Finish Setup**

Sync begins immediately.

## Connecting QuickBooks Desktop

For QuickBooks Desktop (Windows):

1. Download the **QuickBooks Web Connector** from Intuit
2. In LinkServicePro: **Settings → Integrations → QuickBooks Desktop**
3. Download the .qwc configuration file
4. Open Web Connector and load the .qwc file
5. Enter your LinkServicePro credentials when prompted
6. Click **Update Selected** to sync

Sync runs whenever Web Connector is open (recommend leaving it running during business hours).

## Field mapping

Ensure fields sync correctly:

### Customers

- LinkServicePro Customer Name → QuickBooks Customer Name
- Billing Address → Bill To address
- Service Address → Ship To address

### Invoices

- Invoice # → Invoice Number
- Line items → QuickBooks line items
- Total → QuickBooks total
- Due date → Due date

### Payments

- Payment amount → QuickBooks payment
- Payment method → Deposit account
- Date → Payment date

Configure mapping under **Settings → Integrations → QuickBooks → Field Mapping**.

## Syncing existing data

If you already have customers/invoices in both systems:

1. Choose **Merge Duplicates** during setup
2. System matches by:
   - Customer name
   - Email address
   - Invoice number
3. Review matches before confirming
4. Click **Merge**

Or choose **Import from QuickBooks** to pull everything from QB into LinkServicePro.

## How syncing works

### Real-time sync

- Invoice created in LinkServicePro → appears in QuickBooks within 60 seconds
- Payment recorded in LinkServicePro → updates QuickBooks invoice immediately

### Batch sync

- Runs daily at 2 AM (your time zone)
- All changes since last sync are processed

### Manual sync

- Click **Sync Now** anytime to force an update

## Handling sync errors

If data fails to sync:

1. Go to **Integrations → QuickBooks → Sync Log**
2. View failed items and error messages
3. Common issues:
   - **Missing account mapping**: Assign an income/expense account
   - **Duplicate invoice number**: QuickBooks requires unique invoice IDs
   - **Customer name mismatch**: Update customer name to match QB exactly
4. Fix the issue and click **Retry**

## Two-way sync considerations

### Editing in QuickBooks

If you edit an invoice in QuickBooks:
- Changes DO NOT sync back to LinkServicePro
- LinkServicePro is the source of truth for field service data

### Editing in LinkServicePro

If you edit an invoice in LinkServicePro:
- Changes sync to QuickBooks and overwrite QB data

**Best practice**: Make all field service changes in LinkServicePro.

## Chart of accounts

Import your QuickBooks chart of accounts:

1. **Settings → Integrations → QuickBooks → Import Accounts**
2. System pulls all income and expense categories
3. Use these when categorizing materials, labor, etc.

This ensures consistent accounting across both systems.

## Reports and reconciliation

### Verify sync accuracy

1. **Reports → QuickBooks Sync Report**
2. View:
   - Total invoices synced
   - Total payments synced
   - Any failed items
   - Last sync time

### Monthly reconciliation

Compare totals:

- LinkServicePro **Revenue** report vs. QuickBooks **Profit & Loss**
- Should match exactly if all items synced successfully

## Disconnecting QuickBooks

To disconnect the integration:

1. **Settings → Integrations → QuickBooks**
2. Click **Disconnect**
3. Confirm

**Note**: Already-synced data remains in QuickBooks. Future invoices won't sync.

## Frequently asked questions

**Can I sync multiple QuickBooks companies?**
No—one LinkServicePro account connects to one QuickBooks company.

**What happens if I delete an invoice in LinkServicePro?**
It's marked as deleted but NOT deleted in QuickBooks (for accounting compliance).

**Can I sync expenses from QuickBooks to LinkServicePro?**
Not yet—only invoices and payments sync currently.

**Does this work with QuickBooks Payroll?**
No—payroll data doesn't sync. Use QuickBooks Payroll separately.

**What if I switch from Desktop to Online?**
Disconnect Desktop integration, then connect to QuickBooks Online. You may need to re-sync historical data.

---

**Save hours on bookkeeping**: LinkServicePro + QuickBooks sync eliminates double-entry and ensures your books are always up-to-date.`
      },
      {
        slug: "google-calendar-sync",
        title: "Syncing schedules with Google Calendar",
        content: `# Syncing schedules with Google Calendar

View your LinkServicePro jobs alongside personal appointments in Google Calendar.

## What syncs

Once connected:

- **Jobs** appear as calendar events
- **Title**: Customer name + service type
- **Time**: Scheduled start and end time
- **Location**: Job site address (clickable for directions)
- **Description**: Job notes and details

Changes in LinkServicePro update Google Calendar automatically.

## Connecting Google Calendar

1. **Settings → Integrations → Google Calendar**
2. Click **Connect Google Account**
3. Log in with your Google credentials
4. Grant LinkServicePro calendar access
5. Choose which calendar to sync to:
   - Default (primary calendar)
   - Or create a new "LinkServicePro Jobs" calendar
6. Click **Sync**

Jobs appear in Google Calendar within 60 seconds.

## Sync settings

Configure what syncs:

### By user

- Sync only **your** assigned jobs
- Or sync **all** jobs (good for dispatchers/admins)

### By job status

- Sync **all** jobs
- Or sync only **confirmed** jobs (skip tentative/pending)

### Visibility

- Mark events as **Busy** (blocks time in calendar)
- Or **Free** (shows job but doesn't block)

Adjust under **Settings → Integrations → Google Calendar → Preferences**.

## Two-way sync

### LinkServicePro → Google

- Jobs created/edited in LinkServicePro update Google Calendar
- Job canceled in LinkServicePro → event deleted in Google

### Google → LinkServicePro

- **Not supported** (changes in Google don't sync back)
- Google Calendar is read-only for LinkServicePro data

**Why?** To avoid conflicts and ensure LinkServicePro remains the source of truth for field service scheduling.

## Viewing jobs in Google Calendar

### Desktop

1. Open Google Calendar
2. Jobs appear as events with customer name
3. Click event to see job details
4. Click address to open in Google Maps

### Mobile

1. Open Google Calendar app
2. Jobs show alongside personal appointments
3. Tap for details or directions

### Sharing with team

If using Google Workspace:

1. Create a shared "Field Service Jobs" calendar
2. Sync LinkServicePro to that calendar
3. Share the calendar with your team

Everyone sees all jobs without needing LinkServicePro access.

## Color-coding

Make jobs easy to spot:

1. In Google Calendar, click **Settings**
2. Find "LinkServicePro Jobs" calendar
3. Choose a color (e.g., blue for jobs, red for emergencies)

Or use LinkServicePro's job types to auto-color:

- **Maintenance**: Green
- **Emergency**: Red
- **Installation**: Blue
- **Inspection**: Yellow

Configure under **Settings → Job Types → Calendar Colors**.

## Handling conflicts

If a job overlaps with a personal appointment:

- Google Calendar shows both events
- You'll see a conflict warning in Google Calendar
- Reschedule one or the other as needed

LinkServicePro doesn't prevent scheduling conflicts with external calendars.

## Disconnecting Google Calendar

To stop syncing:

1. **Settings → Integrations → Google Calendar**
2. Click **Disconnect**
3. Confirm

**Note**: Already-synced events remain in Google Calendar but won't update.

## Privacy considerations

### What LinkServicePro can see

- Your calendar events (to detect conflicts)
- Calendar metadata (name, timezone)

### What LinkServicePro can't see

- Event details from non-LinkServicePro events
- Personal calendar content

### What's shared

- Only LinkServicePro job data appears in Google Calendar
- Your Google data stays private

## Troubleshooting

**Jobs not appearing in Google Calendar**
- Check that integration is connected (Settings → Integrations)
- Verify the correct calendar is selected
- Click **Sync Now** to force update

**Old jobs not deleting from Google**
- Google Calendar keeps canceled events for 30 days by default
- Manually delete from Google Calendar if needed

**Seeing duplicate events**
- Ensure you're not syncing to multiple calendars
- Check for manual calendar entries that match LinkServicePro jobs

**Changes not syncing**
- Sync typically happens within 60 seconds
- If delayed, click **Sync Now** in integration settings

**Want to sync with Outlook/Apple Calendar instead?**
- LinkServicePro also supports Outlook and iCloud Calendar
- See Help → Integrations → Outlook/iCloud for setup

---

**Pro tip**: Sync to a shared Google Calendar so your whole team sees everyone's jobs—without needing separate LinkServicePro logins for office staff.`
      },
      {
        slug: "zapier-automation",
        title: "Automating workflows with Zapier",
        content: `# Automating workflows with Zapier

Connect LinkServicePro to 5,000+ apps with Zapier—no coding required.

## What is Zapier?

Zapier connects apps and automates workflows using "Zaps":

**Trigger** (when this happens) → **Action** (do this)

Example:
- **Trigger**: New job created in LinkServicePro
- **Action**: Send Slack message to your team

## Setting up the LinkServicePro Zapier integration

1. Go to [zapier.com](https://zapier.com) and create an account (free tier available)
2. Search for "LinkServicePro" in the app directory
3. Click **Connect**
4. Enter your LinkServicePro API key:
   - Get this from **Settings → Integrations → API → Generate Key**
5. Authorize the connection

Now you can create Zaps using LinkServicePro triggers and actions.

## Available triggers

These events in LinkServicePro can trigger Zaps:

- **New Customer**: When a customer is added
- **New Job Created**: When a job is scheduled
- **Job Completed**: When a technician marks a job complete
- **Invoice Sent**: When an invoice is emailed to a customer
- **Payment Received**: When a payment is recorded
- **Quote Approved**: When a customer approves a quote

## Available actions

These actions can be performed in LinkServicePro:

- **Create Customer**: Add a new customer
- **Create Job**: Schedule a new job
- **Create Invoice**: Generate an invoice
- **Update Job Status**: Change job status (scheduled, in progress, completed)
- **Add Note**: Attach a note to a customer or job

## Example Zaps

### 1. Notify team in Slack when emergency job is created

**Trigger**: New Job Created (filter by priority = Emergency)  
**Action**: Send Slack message to #dispatch channel

**Why**: Instant team notification without checking LinkServicePro.

### 2. Add new customers to Mailchimp mailing list

**Trigger**: New Customer  
**Action**: Add subscriber to Mailchimp list

**Why**: Automatically build your email list for marketing campaigns.

### 3. Create Google Sheets row for every completed job

**Trigger**: Job Completed  
**Action**: Add row to Google Sheets (job details, revenue, date)

**Why**: Build custom reports or track KPIs in spreadsheets.

### 4. Send SMS reminder 1 day before job

**Trigger**: New Job Created  
**Action**: Schedule Twilio SMS 24 hours before start time

**Why**: Reduce no-shows with automated text reminders.

### 5. Create Trello card for large quotes

**Trigger**: Quote Sent (filter by amount > $5,000)  
**Action**: Create Trello card in "High-Value Opportunities" list

**Why**: Track important sales opportunities visually.

### 6. Log payments in Airtable

**Trigger**: Payment Received  
**Action**: Create Airtable record with payment details

**Why**: Custom payment tracking and reporting.

## Building your first Zap

1. In Zapier, click **Create Zap**
2. **Choose trigger app**: LinkServicePro
3. **Choose trigger event**: e.g., "New Job Created"
4. Connect your LinkServicePro account
5. Test the trigger (pulls sample job data)
6. **Choose action app**: e.g., Slack
7. **Choose action event**: e.g., "Send Channel Message"
8. Connect your Slack account
9. Configure message:
   - Channel: #dispatch
   - Message: "New job: {{Customer Name}} - {{Service Type}} at {{Start Time}}"
10. Test the action
11. Turn on the Zap

Now every new job triggers a Slack message automatically.

## Multi-step Zaps (Zapier paid plans)

Chain multiple actions together:

**Trigger**: Quote Approved  
**Action 1**: Create job in LinkServicePro  
**Action 2**: Send confirmation email via Gmail  
**Action 3**: Add customer to Mailchimp "Active Customers" list

This creates an entire workflow from one quote approval.

## Filtering and conditions

Use filters to run Zaps only when conditions are met:

- **Filter**: Only run if Job Priority = Emergency
- **Filter**: Only run if Invoice Amount > $1,000
- **Filter**: Only run if Customer Tags contain "VIP"

This prevents unnecessary actions and focuses automation where it matters.

## Troubleshooting Zaps

**Zap not triggering**
- Check that trigger conditions are correct
- Verify data exists (e.g., if filtering by tag, ensure tag exists)
- Click **Test Trigger** to see what data Zapier is receiving

**Action failing**
- Ensure action app is connected and authorized
- Check required fields are filled
- Review error logs in Zapier dashboard

**Data not matching**
- Use Zapier's built-in formatter to adjust data formats
- Example: Convert date formats, trim whitespace, capitalize text

## Zapier pricing

- **Free**: 100 tasks/month, single-step Zaps
- **Starter**: $20/month, 750 tasks, multi-step Zaps
- **Professional**: $50/month, 2,000 tasks, filters, advanced features

A "task" = one action performed (e.g., one Slack message sent).

## Alternatives to Zapier

LinkServicePro also supports:

- **Make (formerly Integromat)**: More complex automation, visual workflow builder
- **n8n**: Open-source automation (self-hosted)
- **Custom API**: Build your own integrations (see Help → API Docs)

## Best practices

- **Start simple**: Create one Zap at a time, test thoroughly
- **Use filters**: Avoid triggering on every event—be selective
- **Monitor task usage**: Check Zapier dashboard to avoid overage charges
- **Test before going live**: Use Zapier's testing tools to verify each step
- **Document your Zaps**: Add descriptions so you remember what they do months later

---

**Automate everything**: With Zapier, you can connect LinkServicePro to your entire tech stack—CRM, marketing tools, spreadsheets, communication apps, and more.`
      }
    ]
  }
];
