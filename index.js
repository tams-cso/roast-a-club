window.onload = async function () {
    const clubs = await fetch('clubs.json').then((d) => d.json());
    clubs.forEach((c) => {
        $('#links').append(
            `<button class="club-link" onclick="openLink('${c.link}')">${c.name}</button>`
        );
    });
};

function openLink(link) {
    window.open(link);
}
