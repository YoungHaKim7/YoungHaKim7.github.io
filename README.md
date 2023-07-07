# YoungHaKim7.github.io

A small static SPA site meant to be hosted on Github Pages to serve as a blog and portfolio of the projects that I publish on Github. It is built using the Yew and Trunk, so everything is rendered client-side with WASM.

## Usage

For a more thorough explanation of Trunk and its features, please head over to the [repository][trunk].

### Installation

If you don't already have it installed, it's time to install Rust: <https://www.rust-lang.org/tools/install>.
The rest of this guide assumes a typical Rust installation which contains both `rustup` and Cargo.

To compile Rust to WASM, we need to have the `wasm32-unknown-unknown` target installed.
If you don't already have it, install it with the following command:

```bash
rustup target add wasm32-unknown-unknown
```

Now that we have our basics covered, it's time to install the star of the show: [Trunk].
Simply run the following command to install it:

```bash
cargo install trunk wasm-bindgen-cli
```

That's it, we're done!

### Running

```bash
trunk serve
```

Rebuilds the app whenever a change is detected and runs a local server to host it.

There's also the `trunk watch` command which does the same thing but without hosting it.

### Release

```bash
trunk build --release
```

This builds the app in release mode similar to `cargo build --release`.
You can also pass the `--release` flag to `trunk serve` if you need to get every last drop of performance.

Unless overwritten, the output will be located in the `dist` directory.

https://github.com/ShironCat/ShironCat.github.io

<br>

<hr>

<hr>

# Trunk

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

# GitLab CI

To test your package on GitLab CI, here is a sample .gitlab-ci.yml file:

```
stages:
  - build

rust-latest:
  stage: build
  image: rust:latest
  script:
    - cargo build --verbose
    - cargo test --verbose

rust-nightly:
  stage: build
  image: rustlang/rust:nightly
  script:
    - cargo build --verbose
    - cargo test --verbose
  allow_failure: true
```

This will test on the stable channel and nightly channel, but any breakage in nightly will not fail your overall build. Please see the GitLab CI documentation for more information.

- 다른 방법
```
# This file is a template, and might need editing before it works on your project.
# You can copy and paste this template into a new `.gitlab-ci.yml` file.
# You should not add this template to an existing `.gitlab-ci.yml` file by using the `include:` keyword.
#
# To contribute improvements to CI/CD templates, please follow the Development guide at:
# https://docs.gitlab.com/ee/development/cicd/templates.html
# This specific template is located at:
# https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Rust.gitlab-ci.yml

# Official language image. Look for the different tagged releases at:
# https://hub.docker.com/r/library/rust/tags/
image: "rust:latest"

# Optional: Pick zero or more services to be used on all builds.
# Only needed when using a docker container to run your tests in.
# Check out: https://docs.gitlab.com/ee/ci/services/index.html
# services:
#   - mysql:latest
#   - redis:latest
#   - postgres:latest

# Optional: Install a C compiler, cmake and git into the container.
# You will often need this when you (or any of your dependencies) depends on C code.
# before_script:
#   - apt-get update -yqq
#   - apt-get install -yqq --no-install-recommends build-essential

# Use cargo to test the project
test:cargo:
  script:
    - rustc --version && cargo --version  # Print version info for debugging
    - cargo test --workspace --verbose

# Optional: Use a third party library to generate gitlab junit reports
# test:junit-report:
#   script:
#     Should be specified in Cargo.toml
#     - cargo install junitify
#     - cargo test -- --format=json -Z unstable-options --report-time | junitify --out $CI_PROJECT_DIR/tests/
#   artifacts:
#     when: always
#     reports:
#       junit: $CI_PROJECT_DIR/tests/*.xml

deploy:
  stage: deploy
  script: echo "Define your deployment script!"
  environment: production

```

<hr>

- builds.sr.ht
To test your package on sr.ht, here is a sample .build.yml file. Be sure to change <your repo> and <your project> to the repo to clone and the directory where it was cloned.

```
image: archlinux
packages:
  - rustup
sources:
  - <your repo>
tasks:
  - setup: |
      rustup toolchain install nightly stable
      cd <your project>/
      rustup run stable cargo fetch
  - stable: |
      rustup default stable
      cd <your project>/
      cargo build --verbose
      cargo test --verbose
  - nightly: |
      rustup default nightly
      cd <your project>/
      cargo build --verbose ||:
      cargo test --verbose  ||:
  - docs: |
      cd <your project>/
      rustup run stable cargo doc --no-deps
      rustup run nightly cargo doc --no-deps ||:
```  

This will test and build documentation on the stable channel and nightly channel, but any breakage in nightly will not fail your overall build. Please see the builds.sr.ht documentation for more information.

# Thanks to

https://github.com/ShironCat/ShironCat.github.io
