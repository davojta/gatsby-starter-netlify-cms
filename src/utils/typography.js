import Typography from "typography";

const typography = new Typography({
    baseFontSize: "16px",
    baseFontWeight: '200',
    googleFonts: [
        {
            name: 'Istok Web',
            styles: [
                '200',
                '400',
                '400i',
                '700',
                '700i',
            ],
        }
    ],
    headerFontFamily: ['Istok Web', 'sans-serif'],
    bodyFontFamily: ['Istok Web', 'serif'],
    bodyWeight: '200',
});

export default typography;
