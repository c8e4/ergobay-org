<script>
	import MintButton from "./MintButton.svelte";


	const boxes = [
		{
			img: 'chest/10erg.png',
			erg: 10,
			usd: '200,00'
		},
		{
			img: 'chest/100erg.png',
			erg: 100,
			usd: '2.000,00'
		},
		{
			img: 'chest/1000erg.png',
			erg: 1000,
			usd: '20.000,00'
		},
		{
			img: 'chest/10000erg.png',
			erg: 10000,
			usd: '200.000,00'
		},
		{
			img: 'chest/1.27erg.png',
			erg: 1.27,
			usd: '25,40'
		}
	];

	let hodlRate = 20;

	let imgIndex = 0;
	function back() {
		imgIndex = Math.max(0, imgIndex - 1);
	}
	function next() {
		imgIndex = Math.min(boxes.length - 1, imgIndex + 1);
	}
</script>

<div class="bg-coral2 flex flex-col items-center" style="margin-top:-100px;">
	<div class="font-bold text-white">24 months</div>
	<div class="text-7xl font-bold text-white">${boxes[imgIndex].usd}</div>
	<div class="font-bold text-white">$20/ERG</div>
	<div class="flex items-center">
		<div style={`visibility:${imgIndex == 0 ? 'hidden' : 'unset'}`}>
			<button class="btn" on:click={back}> back </button>
		</div>
		<div style="width: 700px; height: 512px; position:relative;">
			<img 
			style="max-width: 700px; max-height: 512px;left:0;top:0;"
			class="absolute unselectable" src={boxes[imgIndex].img} alt="" />
			<div style="margin-bottom:-100px;position:absolute; bottom: 0%;left: 50%; transform: translate(-50%, -50%); color:white;">
				<MintButton>
					hodl {boxes[imgIndex].erg} ERG
				</MintButton>
				
			</div>
		</div>
		<div style={`visibility:${imgIndex == boxes.length - 1 ? 'hidden' : 'unset'}`}>
			<button class="btn" on:click={next}> next </button>
		</div>
	</div>
</div>

<style>
	.bg-coral {
		background-image: url('bg/coral.png');
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
