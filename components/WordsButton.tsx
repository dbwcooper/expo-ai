import { RNTamaguiViewNonStyleProps, StackStyleBase, WithThemeValues, WithShorthands, WithPseudoProps, WithMediaProps, WithThemeShorthandsAndPseudos } from '@tamagui/core'
import { Activity, Airplay } from '@tamagui/lucide-icons'
import { JSX, RefAttributes } from 'react'
import { Button, SizeTokens, TamaguiElement, XGroup, XStack, YStack } from 'tamagui'

export function ButtonDemo(props: JSX.IntrinsicAttributes & Omit<RNTamaguiViewNonStyleProps, "elevation" | keyof StackStyleBase | "fullscreen"> & WithThemeValues<StackStyleBase> & { elevation?: number | SizeTokens | undefined; fullscreen?: boolean | undefined; inset?: number | SizeTokens | { top?: number; bottom?: number; left?: number; right?: number } | undefined } & WithShorthands<WithThemeValues<StackStyleBase>> & WithPseudoProps<WithThemeValues<StackStyleBase> & { elevation?: number | SizeTokens | undefined; fullscreen?: boolean | undefined; inset?: number | SizeTokens | { top?: number; bottom?: number; left?: number; right?: number } | undefined } & WithShorthands<WithThemeValues<StackStyleBase>>> & WithMediaProps<WithThemeShorthandsAndPseudos<StackStyleBase, { elevation?: number | SizeTokens | undefined; fullscreen?: boolean | undefined; inset?: number | SizeTokens | { top?: number; bottom?: number; left?: number; right?: number } | undefined }>> & RefAttributes<TamaguiElement>) {
  return (
    <YStack padding="$3" gap="$3" {...props}>
      <Button>Plain</Button>
      <Button alignSelf="center" icon={Airplay} size="$6">
        Large
      </Button>
      <XStack gap="$2" justifyContent="center">
        <Button size="$3" theme="active">
          Active
        </Button>
        <Button size="$3" variant="outlined">
          Outlined
        </Button>
      </XStack>
      <XStack gap="$2">
        <Button themeInverse size="$3">
          Inverse
        </Button>
        <Button iconAfter={Activity} size="$3">
          iconAfter
        </Button>
      </XStack>
      <XGroup>
        <XGroup.Item>
          <Button width="50%" size="$2" disabled opacity={0.5}>
            disabled
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button width="50%" size="$2" chromeless>
            chromeless
          </Button>
        </XGroup.Item>
      </XGroup>
    </YStack>
  )
}