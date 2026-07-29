# Relicbound 1.0 Launch Roadmap

## Launch Target

- Stretch launch: 14 August 2026
- Target launch: 21 August 2026
- Fallback launch: 28 August 2026
- Platform: iPhone
- Price: £1.99, one-time purchase

## Product

Relicbound is an iPhone collection game that generates nearby walking expeditions and rewards completed routes with sealed cases containing lost relics.

The player chooses how long they want to walk, selects a nearby route, follows Apple Maps directions, completes the expedition and builds a persistent museum collection.

## Version 1.0 Scope

- Quick, Standard, Long and Extended Expeditions
- Return-to-start and one-way routes
- Apple Maps walking directions
- Background distance tracking
- Persistent active-expedition recovery
- Four lost civilisations
- 105 collectible relics
- Common, uncommon, rare and centrepiece rarities
- Five relic condition levels
- Duplicate and restoration systems
- Museum ranks and collection milestones
- Achievements
- Expedition history and lifetime statistics
- First-run onboarding and introductory case
- Companion website and public lore archive
- Privacy and support pages
- No accounts, adverts, subscriptions or backend

## Civilisations

- Tideborn: 30 relics
- Emberwright Dominion: 25 relics
- Verdant Choir: 25 relics
- Meridian Archive: 25 relics

Total: 105 relics

## 29 to 31 July: Planning

### App

- Complete the canonical relic catalogue
- Finalise reward odds and pity rules
- Finalise restoration progression
- Finalise onboarding and achievements
- Define expedition lengths and route affinities

### Website

- Create the repository
- Define the site structure
- Define the shared relic-data format
- Prepare landing-page, privacy and support copy
- Prepare the custom subdomain

## 1 to 2 August: Structural Build Weekend

### App

- Persist active expeditions
- Recover active expeditions after relaunch
- Add expedition history
- Add lifetime statistics
- Add onboarding and introductory case
- Add museum rank and restoration progression
- Add unseen-relic markers

### Website

- Create the Astro project
- Build the main layout
- Build the home page
- Build the How It Works page
- Build civilisation and relic page templates
- Add privacy and support pages

## 3 to 7 August: Content Integration

### App

- Integrate all four civilisations
- Integrate all 105 relics
- Add route-affinity classification
- Add duplicate protection
- Add rare and centrepiece pity systems
- Add achievement and milestone rewards
- Balance expedition case rewards

### Website

- Import the relic dataset
- Generate civilisation pages
- Generate relic pages
- Add archive search and filters
- Add spoiler controls
- Add TestFlight recruitment content

## 8 to 9 August: Presentation Weekend

### App

- Polish sealed-case opening
- Add rarity-specific presentation
- Add haptics
- Add sequential case opening
- Finalise the app icon and visual identity
- Complete accessibility and safety passes
- Freeze version 1.0 features

### Website

- Finalise mobile styling
- Add screenshots and video
- Add press resources
- Configure GitHub Pages
- Configure the custom domain
- Publish the beta website

## 10 to 16 August: External Beta

- Upload the external TestFlight build
- Recruit 5 committed walking testers
- Recruit 10 to 20 casual testers
- Test city, suburban and park routes
- Test poor-signal behaviour
- Test Apple Maps handoff
- Test phone locking and background tracking
- Fix crashes, route errors and battery problems
- Publish development and beta marketing content
- Gather tester feedback and testimonials

No new features after 9 August unless required to resolve a launch-blocking problem.

## 17 August: App Store Submission

- Submit version 1.0
- Set £1.99 pricing
- Complete privacy and age-rating information
- Complete tax and banking setup
- Add App Review notes for background location
- Provide an accessible review demonstration
- Change the website to a launch countdown

## 18 to 20 August: Launch Preparation

- Resolve App Review issues
- Publish launch countdown content
- Finalise support responses
- Verify the website and App Store links
- Prepare launch-day posts

## 21 August: Public Launch

- Release Relicbound at £1.99
- Replace the website countdown with the App Store link
- Publish the launch video
- Share early discoveries and centrepieces
- Monitor crashes, route failures and support requests

## Companion Website

Planned address:

`https://relicbound.thomaspercival.dev`

Launch pages:

- Home
- How It Works
- Archive
- Four civilisation pages
- 105 relic pages
- Privacy
- Support
- Press

The website will use Astro, TypeScript, GitHub Pages and GitHub Actions.

It will be statically generated and will contain no accounts or personal expedition data.

## Launch Gates

Relicbound will not launch until:

- No reproducible crash exists in the expedition loop
- Active expeditions survive backgrounding and relaunch
- Background location stops after completion or abandonment
- Route distances and displayed units are consistent
- Raw Core Location errors are never shown
- Inaccessible POI centre points are replaced by reachable route endpoints
- Cases, relics and museum progress persist correctly
- All 105 relics are obtainable
- Restoration and achievement rewards are valid
- Onboarding works without granting location permission
- Privacy and support pages are live
- External testers have completed real expeditions successfully

## Immediate Development Priorities

1. Persist active expeditions
2. Recover expeditions after termination
3. Add expedition-length selection
4. Add route affinities
5. Integrate all four civilisation datasets
6. Add reward guarantees and pity counters
7. Add museum progression and restoration
8. Add onboarding and the introductory case
9. Add achievements, statistics and history
10. Polish sealed-case opening
11. Build and publish the companion website
12. Begin external TestFlight testing
