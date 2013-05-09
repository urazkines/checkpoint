checkpoint
==========

Simple share plugin for Facebook, Twitter, Google+ and Linkedin.

## Usage
Download the [minified library](https://raw.github.com/jonobr1/two.js/master/build/two.min.js) and include it in your html.

```html
<script src="js/checkpoint.min.js"></script>
```

Here is boilerplate html in order to draw a spinning rectangle in checkpoint.js:

```html
<!doctype html>
<html>
<head>
	<script src="js/checkpoint.min.js"></script>
	<script>
		$('.facebook').checkpoint('facebook');
		$('.twitter').checkpoint('twitter');
		$('.google').checkpoint('google');
		$('.linkedin').checkpoint('linkedin');
	</script>
</head>
<body>
	<a href="#" class="facebook" data-title="title" data-text="text" data-url="url" data-img="image">Facebook</a>
	<a href="#" class="twitter" data-text="text" data-url="url">Twitter</a>
	<a href="#" class="google" data-url="url">Google</a>
	<a href="#" class="linkedin" data-title="title" data-text="text" data-url="url">Linkedin</a>
</body>
</html>
```

## Options
You can change attributes from options in plugin.