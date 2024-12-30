export default {
    props: {
        game: {
            type: String,
            required: true,
        },
        creators: {
            type: Array,
            required: true,
        },
        verifier: {
            type: String,
            required: true,
        },
    },
    template: `
        <div class="level-authors">
            <template v-if="selfVerified">
                <div class="type-title-sm">Developer & Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
            </template>
            <template v-else-if="creators.length === 0">
                <div class="type-title-sm">Developer</div>
                <p class="type-body">
                    <span>{{ creator }}</span>
                </p>
                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
            </template>
            <template v-else>
                <div class="type-title-sm">Developers</div>
                <p class="type-body">
                    <template v-for="(creator, index) in creators" :key="\`creator-\$\{creator\}\`">
                        <span >{{ creator }}</span
                        ><span v-if="index < creators.length - 1">, </span>
                    </template>
                </p>
                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
            </template>
            <div class="type-title-sm">Game</div>
            <p class="type-body">
                <span>{{ game }}</span>
            </p>
        </div>
    `,

    computed: {
        selfVerified() {
            return this.creators[0] === this.verifier && this.creators.length === 1;
        },
    },
};
