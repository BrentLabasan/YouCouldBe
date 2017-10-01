export default function () {
    // https://stackoverflow.com/a/31615643/708355
    function getGetOrdinal(n) {
        var s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    }
}