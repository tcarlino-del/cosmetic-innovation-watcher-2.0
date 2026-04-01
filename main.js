cat > main.js << 'EOF'
const Apify = require('apify');

Apify.main(async () => {
    const logger = Apify.getLogger();
    logger.info('🧴 Cosmetic Innovation Watcher started');

    try {
        const dataset = await Apify.openDataset('cosmetic-innovation-results');
        
        // Mock data for testing
        const products = [
            {
                productName: 'BeautyAI Pro',
                description: 'AI-powered personalized skincare',
                type: 'biotech',
                launchDate: '2026-06-15',
                company: 'InnovBeauty Labs',
                country: 'France',
                source: 'https://techcrunch.com/beauty',
                sourceWebsite: 'TechCrunch',
                contactName: 'Marie Dupont',
                contactRole: 'Head of Innovation',
                contactLinkedIn: 'https://linkedin.com/in/mariedupont',
                contactEmail: 'm.dupont@innovbeauty.fr',
                contactPhone: '+33 6 12 34 56 78',
                scrapedAt: new Date().toISOString()
            },
            {
                productName: 'CleanGlow Pro',
                description: 'Zero-waste sustainable cosmetics',
                type: 'sustainable-cosmetics',
                launchDate: '2026-05-15',
                company: 'EcoBeauty Labs',
                country: 'Germany',
                source: 'https://prnewswire.com/cosmetics',
                sourceWebsite: 'PR Newswire',
                contactName: 'Hans Mueller',
                contactRole: 'Business Development',
                contactLinkedIn: 'https://linkedin.com/in/hansmueller',
                contactEmail: 'h.mueller@ecobeauty.de',
                contactPhone: '+49 30 123456',
                scrapedAt: new Date().toISOString()
            },
            {
                productName: 'NanoRepair Serum',
                description: 'Nanotechnology anti-aging serum',
                type: 'nanotech',
                launchDate: '2026-07-01',
                company: 'NanoBeauty Corp',
                country: 'USA',
                source: 'https://crunchbase.com/beauty-tech',
                sourceWebsite: 'Crunchbase',
                contactName: 'Sarah Johnson',
                contactRole: 'VP Innovation',
                contactLinkedIn: 'https://linkedin.com/in/sarahjohnson',
                contactEmail: 's.johnson@nanobeauty.com',
                contactPhone: '+1 415 555 1234',
                scrapedAt: new Date().toISOString()
            }
        ];

        logger.info(`📊 Found ${products.length} products`);

        // Save to dataset
        for (const product of products) {
            await dataset.pushData(product);
        }

        logger.info('💾 Results saved to dataset');
        logger.info('✨ Cosmetic Innovation Watcher completed successfully!');

    } catch (error) {
        logger.error('💥 Error:', error);
        throw error;
    }
});
EOF
