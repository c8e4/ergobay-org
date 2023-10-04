<script>
	const boxes = [
		{ img: 'chest/10erg.png' },
		{ img: 'chest/100erg.png' },
		{ img: 'chest/1000erg.png' },
		{ img: 'chest/10000erg.png' },
		{ img: 'chest/cyberpunk.png' }
	];

	let imgIndex = 0;
	function back() {
		imgIndex = Math.max(0, imgIndex - 1);
	}
	function next() {
		imgIndex = Math.min(boxes.length - 1, imgIndex + 1);
	}
</script>

<div class="flex flex-col gap-10">
	<div class="flex items-center">
		<div style={`visibility:${imgIndex==0?'hidden':'unset'}`}>
			<button class="btn" on:click={back}> back </button>
		</div>
		<div>
			<img class="unselectable" src={boxes[imgIndex].img} alt="" />
		</div>
		<div style={`visibility:${imgIndex==boxes.length-1?'hidden':'unset'}`}>
			<button class="btn" on:click={next}> next </button>
		</div>
	</div>
</div>
