<script>
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

<div class="bg-coral2 flex flex-col items-center gap-10" style="margin-top:-100px;">
	<div style="padding-top:200px;" class="text-7xl font-bold text-white">${boxes[imgIndex].usd} USD</div>
	<div class="flex items-center">
		<div style={`visibility:${imgIndex == 0 ? 'hidden' : 'unset'}`}>
			<button class="btn" on:click={back}> back </button>
		</div>
		<div>
			<img class="unselectable" src={boxes[imgIndex].img} alt="" />
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
