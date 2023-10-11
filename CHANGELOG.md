# Changelog

## v6.0.0 - 2023-09-14

- Added typing to various endpoints
- Added `Fletching`
- Removed `ItemArray` type
- Removed retired `APIUptime` and `Heartbeat` APIs
- Renamed `CustomAxiosInstance` to `GeTrackerAxios`
- Consolidated `HighestMargins`, `HighVolume`, `NewItems`, `GELimits`, `FavouriteItems`, and `SuggestedItems` into `FlipFinder`

  - _`FavouriteItems` remains as a top-level API_

- Consolidated `BlastFurnace`, `CookingBrewing `, and `TanLeather` into `CraftingSmithing`
- Consolidated `HighAlchemy`, `Enchanting`, `MagicTablets`, `PlankMaking`, and `TreeSapling` into `Magic`
- Consolidated `BarrowsRepair`, `ItemSets`, and `CombinationItems` into `ItemConversions`
- Moved `DecantPotions` to `Herblore`
- Added visibility to `APIBaseWrapper` methods

## v5.1.2 - 2022-12-16

### What's Changed

- Improve billing typing

## v5.1.1 - 2022-12-16

### What's Changed

- Add mobile billing providers and dashboard types

## v5.1.0 - 2022-08-29

### What's Changed

- Add Tag API

## v5.0.0 - 2022-06-08

### What's Changed

- Convert package to TypeScript
- Add `X-Api-Client` header to match custom `User-Agent` header
- Add global DMM request interceptor
- Add DMM toggle
- Add graph indicators endpoint
- All Graph "All" duration
- Add `params` to active transaction endpoint
- Add `runelite` as a GraphSource
