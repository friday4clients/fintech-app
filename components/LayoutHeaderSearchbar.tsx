"use client"

import { Icon, Input, InputGroup } from "@chakra-ui/react"
import { SearchNormal1 } from "iconsax-reactjs";

const LayoutHeaderSearchbar = () => {
    return (
        <InputGroup startElement={
            <Icon size="sm" color="gray.950">
                <SearchNormal1 />
            </Icon>
        }>
            <Input
                w="383px" 
                h="44px"
                bg="gray.50"
                py="12px"
                px="16px"
                rounded="lg"
                size="sm"
                variant="subtle"
                placeholder="Search your dashboard"
                _placeholder={{color:"gray.400"}}
                />
        </InputGroup>
    )
}

export default LayoutHeaderSearchbar;