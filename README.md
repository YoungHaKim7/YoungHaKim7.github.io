# YoungHaKim7.github.io

## Trunk

```
trunk serve --open
```


# trunk

```
trunk serve --open
```


- Build, bundle & ship your Rust WASM application to the web

https://github.com/thedodd/trunk


# Setting up

- Prerequisites

This tutorial assumes you're already familiar with Rust. If you're new to Rust, the free Rust Book offers a great starting point for beginners and continues to be an excellent resource even for experienced Rust developers.

Ensure the latest version of Rust is installed by running rustup update or by installing rust if you haven't already done so.

After installing Rust, you can use Cargo to install trunk by running:

```
cargo install trunk
```

We will also need to add the WASM build target by running:

```
rustup target add wasm32-unknown-unknown
```

https://yew.rs/docs/tutorial

<hr>

## trunk install

```
# Install via homebrew on Mac, Linux or Windows (WSL).
brew install trunk

# Install a release binary (great for CI).
# You will need to specify a value for ${VERSION}.
wget -qO- https://github.com/thedodd/trunk/releases/download/${VERSION}/trunk-x86_64-unknown-linux-gnu.tar.gz | tar -xzf-


# Install via cargo.
cargo install --locked trunk
# Until wasm-bindgen has pre-built binaries for Apple M1, M1 users will
# need to install wasm-bindgen manually.
cargo install --locked wasm-bindgen-cli




```

https://trunkrs.dev/#install

<hr>
